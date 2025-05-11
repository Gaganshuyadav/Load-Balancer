
#Number of request to send
REQUEST=40

#URL for Load Balancer
URL="http://localhost:3000"

#Loop to send request
for((i=1;i<=REQUEST; i++)); do
    curl $URL &
done

wait 
echo "All requests have been sent."