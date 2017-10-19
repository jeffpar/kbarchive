---
layout: page
title: "Q203170: XADM: Controlling Public Folder Hierarchy Status Messages"
permalink: /kb/203/Q203170/
---

## Q203170: XADM: Controlling Public Folder Hierarchy Status Messages

	Article: Q203170
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to control public folder hierarchy status messages.
	
	MORE INFORMATION
	================
	
	Public folder status messages for hierarchy objects are sent and received by
	every server that has a public information store in an Exchange Server
	organization. This hierarchy status message is used to keep changes to the
	public folder hierarchy, Internet newsgroup hierarchy (Exchange Server 5.0 and
	5.5 only), system folder hierarchy (offline Address Book, Free/Busy folder, and
	so on), and the Events Configuration folder (Exchange Server 5.5 only)
	synchronized with all of the public information stores across the organization.
	
	By default, these hierarchy status messages are sent once a day. Any Exchange
	Server computer in the organization that has a public information store sends a
	status message for each of the public folder hierarchy objects that are listed
	in the following sections to every server in the Exchange Server organization
	that has a public information store.
	
	Folder Hierarchy
	----------------
	
	This is the hierarchy of public folders as seen by the user. One message is sent
	at each 24-hour interval by default. You can identify this message in the
	Microsoft Windows NT Event Viewer Application event log (when "Replication
	Outgoing Messages" diagnostic logging for the server's public information store
	is set to maximum) by looking at the description of the event ID 3017 message.
	The description for the folder hierarchy status message is similar to the
	following:
	
	  Outgoing message type 0x10
	  Message ID: 1-61ADB
	  Folders: (1-1) IPM_SUBTREE
	
	NOTE: The message ID will differ.
	
	System Folders Hierarchy
	------------------------
	
	This is the hierarchy of the system folders. The system folders consist of the
	offline Address Book, the Free/Busy folder, and the Organizational Forms folder.
	One message is sent at each 24-hour interval by default. You can identify this
	message in the Windows NT Event Viewer Application event log (when "Replication
	Outgoing Messages" diagnostic logging for the server's public information store
	is set to maximum) by looking at the description of the event ID 3017 message.
	The description for the system folder hierarchy status message is similar to the
	following:
	
	  Outgoing message type 0x10
	  Message ID: 1-61AE7
	  Folders: (1-FFFFFFFF0000) NON_IPM_SUBTREE\SYSTEM CONFIGURATION
	
	NOTE: The message ID will differ.
	
	Internet Newsgroups Hierarchy (Exchange Server 5.0 and 5.5 Only)
	----------------------------------------------------------------
	
	This is the hierarchy of Internet newsgroup Network News Transfer Protocol (NNTP)
	folders as seen by the user. One message is sent at each 24-hour interval by
	default. You can identify this message in the Windows NT Event Viewer
	Application event log (when "Replication Outgoing Messages" diagnostic logging
	for the server's public information store is set to maximum) by looking at the
	description of the event ID 3017 message. The description for the Internet
	newsgroup folder hierarchy status message is similar to the following:
	
	  Outgoing message type 0x10
	  Message ID: 1-61AD7
	  Folders: (3-FFFFFFFF0003) IPM_SUBTREE\Internet Newsgroups
	
	NOTE: The message ID will differ.
	
	Events Configuration Hierarchy
	------------------------------
	
	This is the hierarchy of Events Config folders. One message is sent for each
	events folder in the hierarchy at each 24-hour interval by default. You can
	identify this message in the Windows NT Event Viewer Application event log (when
	"Replication Outgoing Messages" diagnostic logging for the server's public
	information store is set to maximum) by looking at the description of the event
	ID 3017 message. The description for the Events Config folder hierarchy status
	message is similar to the following:
	
	  Outgoing message type 0x10
	  Message ID: 1-61AD5
	  Folders: (6e-2F506) NON_IPM_SUBTREE\Events Root\EventConfig_ServerName
	
	NOTE: The message ID will differ, and the server name changes for each folder in
	the hierarchy.
	
	For these outgoing hierarchy status messages, every server that has a public
	information store is considered a recipient of the message. Each recipient adds
	size to the hierarchy status message. Therefore, the more servers that have
	public information stores in the organization, the larger the status message
	is.
	
	In Exchange Server organizations that contain many servers that are configured
	with public information stores, the traffic that is generated for these
	hierarchy status messages can have a significant impact, especially if there are
	many low-bandwidth network connections.
	
	For example, in an Exchange Server 5.5 organization that contains two sites, each
	with five servers, if all of the servers have public information stores,
	approximately 80 hierarchy status messages are sent through the organization at
	either 12:15 A.M. Greenwich mean time or 12:15 P.M. Greenwich mean time
	(assuming that the default settings are used). The following is a breakdown of
	the hierarchy status messages that are sent for the organization in this
	example:
	
	- For each server:
	
	   - One folder hierarchy status message.
	
	   - One system folder hierarchy message.
	
	   - One Internet newsgroup hierarchy message.
	
	   - Five Events Config hierarchy messages.
	
	- A total of 8 messages for each server, multiplied by 10 (for the number of
	  servers in the organization) equals 80 total messages.
	
	To lessen the traffic that hierarchy status messages generate in organizations:
	
	1. Eliminate the public information store on any server that does not need one
	  (for example, a user-only server) in any site. This immediately lessens the
	  hierarchy status message traffic.
	
	2. Add the Replication Send Status Timeout registry value. To do this, you must
	  edit the registry.
	
	  WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	  To add the Replication Send Status Timeout value:
	
	  a. Start Registry Editor (Regedt32.exe).
	
	  b. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	  c. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value name: Replication Send Status Timeout
	  Data type: REG_DWORD
	  Radix: Decimal
	  Value data: Number of seconds; the default value is 84,600 (1 day)
	
	     This value controls whether the current time is an appropriate time to send
	     a status message. By default, status messages are sent once in each
	     24-hour period; therefore, if the last time that a status message was sent
	     is less than 24 hours from the current time, there is no need to send a
	     status message.
	
	     CAUTION: If you increase the Replication Send Status Timeout value to more
	     than the default value of one day, you may cause delays in the
	     notification to servers that they are out of synchronization, and you may
	     delay the backfill.
	
	3. Add the Replication Send Status Alignment registry value:
	
	  1. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	  2. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value name: Replication Send Status Alignment
	  Data type: REG_DWORD
	  Radix: Decimal
	  Value data: Number of seconds; the default value is 42,300 (12 hours)
	
	     This value controls how often the status message task checks to send status
	     messages.
	
	4. Add the Replication Send Status Alignment Skew registry value:
	
	  1. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	  2. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value name: Replication Send Status Alignment Skew
	  Data type: REG_DWORD
	  Radix: Decimal
	  Value data: Number of seconds; the default is 0 (which signifies 12:15
	  Greenwich mean time)
	
	     This value is the offset that is added to the Replication Send Status
	     Alignment value; the Replication Send Status Alignment Skew value changes
	     the time at which the status message task runs. For example, if you want
	     the task to run at 12:00 A.M. eastern time, set this value to 14400 (which
	     is a four-hour offset from Greenwich mean time; a value of 14400 sets the
	     task to run at 4:00 A.M. Greenwich mean time, which is 12:00 A.M. eastern
	     time).
	
	  3. Quit Registry Editor.
	
	Public Folder hierarchy status messages are also automatically sent out when the
	Information Store service is started. You can also control this process (turn it
	on or off) by adding the Disable Replication Messages At Startup registry key:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: Disable Replication Messages At Startup
	  Data type: DWORD
	  Radix: Binary
	  Value data: 1 or 0; default value is 0
	
	4. Quit Registry Editor.
	
	If this registry entry is not present or is present and set to 0, public folder
	replication works as originally designed. In other words, public folder
	replication sends the replication status messages when the information store
	starts. If this registry entry is present and set to 1, public folder
	replication does not send the status messages when the information store
	starts.
	
	It is also very important to differentiate between public folder hierarchy status
	messages and folder status messages. Folder status messages are only sent when a
	change is detected between the local change number and the remote change number
	of a folder object. If there is no change, no status message is sent for a
	folder object. This differs from hierarchy status messages, in that hierarchy
	status messages are always sent. If "Replication Outgoing Messages" is set to
	maximum, a typical folder status message in the Windows NT Event Viewer
	Application event log might look similar to the following message:
	
	  Event ID: 3017
	  Source: MSExchangePublicIS
	  Type: Information
	  Category: Replication Outgoing
	  Description:
	  Outgoing message type 0x10 Message ID: 1-4E2E Folder(s): (1-274C)
	  IPM_SUBTREE\UserFolder1\
	
	NOTE: The message ID and folders will differ.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
