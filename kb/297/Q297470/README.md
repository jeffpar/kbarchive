---
layout: page
title: "Q297470: XFOR: How to Secure Chat Channels with Exchange Chat Service 5.5"
permalink: /kb/297/Q297470/
---

## Q297470: XFOR: How to Secure Chat Channels with Exchange Chat Service 5.5

{% raw %}

	Article: Q297470
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are an administrator, you can use Microsoft Exchange Chat Service 5.5 to
	secure a channel to authenticate clients. By default, all channels enable users
	to enter anonymously.
	
	MORE INFORMATION
	================
	
	The configuration is a two-step process. First, you configure the server, and
	then you configure each client. To configure the client, you must have Microsoft
	Chat 2.5. The server configuration is also a two-step process. First, you create
	a Chat account, and then you set the access levels of the channel to include the
	Chat account.
	
	How to Create the Chat Account:
	
	1. Create a domain global group or local group, and then move the user accounts
	  that you want into this group.
	
	The domain global group can be an Active Directory group or a Microsoft Windows
	NT 4.0 group, and the Exchange Server computer maintains the local group.
	
	NOTE: If you want to add domain accounts individually to the Chat account this
	step is optional.
	
	2. Start the Chat Service Manager snap-in, right-click Accounts, click New, and
	  then click Create Chat Account.
	
	3. Type a new account name, and then click OK.
	
	4. Right-click the new account name, click New, and then click Add Member.
	
	5. Add the appropriate user or group from step one, and then click OK.
	
	For more information about Chat accounts, refer to Microsoft Chat Online Help:
	
	1. Point to Programs, point to Internet Explorer, click Microsoft Chat.
	
	2. On the Chat toolbar, click Help, and then click Online Support.
	
	How to Set the Access on the Channel:
	
	1. Use the Chat Service Manager snap-in to locate the channel properties that
	  you want to limit the client's access to, and then click the Access tab.
	
	2. In the Member account menu, click the name that you created in step three of
	  the "Steps to Create the Chat Account" procedure. The "Authenticated clients
	  only" check box is enabled automatically.
	
	3. Repeat this procedure for every channel that you want to secure to
	  "Authenticated clients only".
	
	How to Configure the Chat 2.5 Client:
	
	1. Log on to the Chat 2.5 client, and then close the initial Chat Connection
	  page.
	
	2. On the View menu, click Options.
	
	3. Click the Servers tab.
	
	4. Verify the server that you want to connect to is not listed in the "None"
	  network. To do so, click the arrow next to the Network box, and then click
	  <None>.
	
	5. You can add your own network name or use the "None" list.
	
	6. If the server name is not present, add the server name to the Servers box in
	  the network that was chosen.
	
	7. Click the server in the Servers box, and then click "IRC username/password".
	
	8. Type the user account you want to connect to that server with.
	
	  NOTE: This account must be a member of the domain global group or local group
	  that you created earlier.
	
	9. To connect to the chat server, click Connect on the Room menu.
	
	When you disconnect and reconnect to the Chat server, you receive a prompt to
	type your credentials. The Chat client is now able enter rooms that have
	restricted access. If you attempt to connect to a room that you do not have
	permissions to access, you are not able to view a warning message that indicates
	that your access has been denied.
	
	
	Additional query words: AD
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
