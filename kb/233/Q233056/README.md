---
layout: page
title: "Q233056: How to Replace a Site Connector with an X.400 Connector"
permalink: /kb/233/Q233056/
---

## Q233056: How to Replace a Site Connector with an X.400 Connector

{% raw %}

	Article: Q233056
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 25-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may want to replace an existing site connector for any of the following
	reasons:
	
	- The site connector saps too much of your bandwidth.
	
	- You have an existing X.400 backbone.
	
	- You have a TCP/IP connection that is not adequate to handle the demands of a
	  site connector.
	
	- You want scheduling and message size control over this connection.
	
	If you have a directory replication connector configured, you do not need to
	delete the directory replication connection. Under most circumstances, either
	directory replication has already finished, or it is in the process of
	replicating directory information. Deleting the directory replication connection
	forces another full synchronization of the directory to the other site.
	
	Instead, configure an X.400 Connector in addition to the site connector.
	
	MORE INFORMATION
	================
	
	To configure an X.400 Connector in addition to the site connector:
	
	1. Create the stack.
	
	  a. Start the Microsoft Exchange Server Administrator program. In the
	     Administrator window, select a server in your organization.
	
	  b. On the File menu, click New Other, and then click MTA Transport Stack. In
	     the Type list, click the stack you want to use. For this example, select
	     TCP/IP MTA Transport Stack.
	
	  c. If more than one server exists in the site, in the Server list, click the
	     server that you want the X.400 Connector to be installed on, and then
	     click OK. To accept the default properties, click OK.
	
	2. Create the X.400 Connector.
	
	  a. On the File menu, click New Other, and then click X.400 Connector. From
	     the list of possible X.400 Connector types, click TCP/IP, and then click
	     OK. The properties of the X.400 Connector are displayed.
	
	  b. In the Display and Directory fields, type a display name and a directory
	     name descriptive enough to be unique in your organization, for example,
	     X.400 to Site 2.
	
	  c. In the Remote MTA Name and Password fields, type the remote MTA name and
	     password of the Microsoft Exchange Server computer that you connect to in
	     the other site (Site 2). You can find the remote MTA name of the other
	     server on the General property page of the MTA for that server, for
	     example, MTA 2. By default, the remote MTA name is the name of the server,
	     and the password is blank.
	
	  d. Click the Schedule tab, and then click Always.
	
	  e. Click the Stack tab, click IP Address, and then type the IP address of the
	     remote server in Site 2.
	
	  f. Click the Address Space tab, click New, and then click X.400.
	
	     1. In the Organization field, type the site name of the remote site.
	
	     2. In the Private Management Domain Name field, type the name of the
	        Exchange Server organization.
	
	     3. In the Administrative Management Domain Name field, ensure there is a
	        single space.
	
	     4. In the Country field, ensure the correct country is selected.
	
	  g. Click the Connected Sites tab, click New, and then in the Site field, type
	     the name of the remote site. Click OK.
	
	  h. Click the Advanced tab, and ensure that the MTA Conformance information is
	     identical for both sites.
	
	  i. When Remote Server Information is indicated, you must perform the previous
	     steps on the other server, using the information on the first server you
	     installed the X.400 Connector on.
	
	After you create the X.400 Connector, you can delete the Site Connector. Then, in
	the MTA properties of the server object, recalculate routing. You may also need
	to stop and restart the Exchange Server services.
	
	If directory replication takes place in this scenario, you can choose a recipient
	from the global address list to test messages from both sides. If directory
	replication has not occurred, you can send a one-off X.400 message to verify
	that the connector is functioning properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
