---
layout: page
title: "Q183674: XADM: How to Find What User Is Changing Objects in Administrator"
permalink: /kb/183/Q183674/
---

## Q183674: XADM: How to Find What User Is Changing Objects in Administrator

{% raw %}

	Article: Q183674
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A user with Administrator rights can delete Exchange objects, either
	inadvertently or maliciously. This article explains how to:
	
	1. Find the Exchange Server computer where unwanted changes are being made.
	
	2. Find which user is making changes to specific objects while attached to that
	  server.
	
	This procedure allows tracking of changes made through bulk imports as well as
	through the normal Administrator program interface.
	
	MORE INFORMATION
	================
	
	An object in the Exchange directory is anything that has Properties viewable in
	Exchange Administrator, including users, distribution lists, connectors, and
	even the Organization object itself. Objects and changes to objects are
	automatically replicated and synchronized among all servers in an Exchange site,
	or even between sites (if a Directory Replication Connector is configured).
	
	By examining the Raw Properties of an object in Administrator, you can tell from
	which server in a site an object was last changed. By turning up Directory
	Service diagnostics logging for Security on a server, you can tell who is making
	changes to objects from that server.
	
	The directory service on each Exchange Server computer has a unique
	Invocation-ID. When an object is changed from a server, the server's
	Invocation-ID is written to the object's DSA-Signature property. When the object
	is replicated to other servers, the DSA-Signature goes with it, thus identifying
	the server from which the change was made.
	
	To check the DSA-Signature of an object, do the following:
	
	WARNING: Using the raw mode of the Exchange Administrator program (admin /r)
	incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Exchange Server Administrator program in raw mode by typing the
	  following at a command prompt:
	
	  admin/r
	
	  By default, the Administrator program is in the \exchsrvr\bin directory.
	
	2. Select your object of interest, and view its raw properties by choosing Raw
	  properties on the File menu, or pressing SHIFT+ENTER.
	
	3. Find DSA-Signature in the Object Attributes list. The following is an example
	  of a typical DSA-Signature value:
	
	     70F3248C5EC3D111A11800805F299FC3
	
	
	  You should clip or jot down the DSA-Signature.
	
	  TIP: In most cases, the last half dozen characters are unique within a site,
	  so you do not need to write down the entire string.
	
	To match the DSA-Signature of an object to the Invocation-ID of a server:
	
	1. Exit the raw properties of the object, and select the local <Site>
	  object (which appears bold in the list of sites), and view its raw
	  properties.
	
	2. Select the Reps-From object attribute of the <Site> object. NOTE: This
	  attribute exists only if there are two or more servers in the site.
	
	  The Reps-From attribute is multivalued and contains as many values as there
	  are servers in the site, less one. A typical Reps-From value for a server
	  looks like this:
	
	     0,112,16,1562,70F3248C5EC3D111A11800805F299FC3,PRO800
	
	
	  Fields in the value are delimited by commas. The last field is the server
	  name. The second-to-last field is the server's Invocation-ID.
	
	  In Administrator, you cannot usually see the entire string, but you can use
	  the horizontal scroll bar to view the end rather than the beginning of the
	  string.
	
	  When you find a match between the Invocation-ID listed here for a server and
	  the DSA-Signature you noted previously, you have found the server that last
	  changed the object.
	
	To track who is making changes to objects from a given server:
	
	1. In Exchange Administrator, select the server of interest. TIP: If you attach
	  directly to this server by choosing Connect to Server from the File menu,
	  your changes take effect immediately. Otherwise, you must wait for changes to
	  replicate to the server.
	
	2. View the <Server> properties by choosing Properties on the File menu,
	  or pressing ALT+ENTER and then selecting the Diagnostics Logging property
	  tab.
	
	3. Select MSExchangeDS and turn Security logging to maximum.
	
	4. To view administrative accesses to Exchange objects from this server, run the
	  Event Viewer and select the Application log. Filter Events to show only
	  events from source MSExchangeDS with a category of Security. Event 1053 will
	  be logged when objects are changed, and the event will record the logon ID
	  that was used to make the change.
	
	  The following is an example of the description for such an event. This event
	  was logged when removing a user from a distribution list called "test."
	
	     User: PRO\Administrator
	     Computer: PRO800
	     Event ID: 1053
	     Source: MSExchangeDS
	     Type: Information
	     Category: Security
	     Description: The security descriptor granted 0x2 access on object
	     /o=Microsoft/ou=PRO/cn=Recipients/cn=test for this user.
	
	
	Additional query words: delete DL mailbox
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
