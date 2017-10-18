---
layout: page
title: "Q323732: ENSO:XADM: Cannot Access the Public Folder Data"
permalink: kb/323/Q323732/
---

## Q323732: ENSO:XADM: Cannot Access the Public Folder Data

	Article: Q323732
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Public folders may be visible, but you cannot view the folder properties or you
	may not have access to the folder. If you run the DS/IS consistency adjuster,
	you may receive the following error message:
	
	  The Public Folder eforms reg/org forms does not exist in the directory
	  service. The time delay before it will be created has not expired.
	
	CAUSE
	=====
	
	This behavior can occur if the public folder does not have a replication on any
	other computer running Exchange Server; the public folder is a "ghost" object.
	This means that the public folder is visible in Microsoft Exchange
	Administrator, but you cannot access or delete it.
	
	After a public folder is created, the hierarchy is replicated to all servers in
	the organization. This hierarchy is stored in the Pub.edb file, and an entry is
	created in the Automoves table for the folder. If a computer running Exchange
	Server is shut down without all of the connections first being broken properly,
	the folders are not marked for future removal from the public folder hierarchy
	or the Automoves table.
	
	This can occur when an Exchange Server computer or site is removed from an
	organization before all connections are broken. Public folders from that site
	may still appear in the hierarchy of other servers in the organization. These
	public folders do not rehome when you run the DS/IS consistency adjuster, and
	the properties for these public folders do not appear.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Stop the Exchange Information Store service. To do so:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Administrative Tools, and then double-click Services.
	
	  c. In the Service list, click Microsoft Exchange Information Store, and then
	     click Stop.
	
	  d. Click Yes when you are prompted to confirm the action.
	
	  e. Click Close.
	
	2. Add the Secure Folder Aging Latency and Automatic Folder Move Age Limit
	  values to the registry.
	
	  WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	  To add the the Secure Folder Aging Latency and Automatic Folder Move Age Limit
	  registry values:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "regedt32" (without the quotation marks), and then
	     click OK.
	
	  c. Locate, and then click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	  d. On the Edit menu, click Add Value.
	
	  e. In the Add Value box that appears, type "Secure Folder Aging Latency"
	     (without the quotation marks) in the Value Name box.
	
	  f. In the Data Type box, click REG_DWORD, and then click OK.
	
	  g. In the DWORD Editor dialog box that appears, type "600" (without the
	     quotation marks) in the Data box, click Decimal, and then click OK.
	
	  h. Locate, and then click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	  i. On the Edit menu, click Add Value.
	
	  j. In the Add Value box that appears, type "Automatic Folder Move Age Limit"
	     (without the quotation marks) in the Value Name box.
	
	  k. In the Data Type box, click REG_DWORD, and then click OK.
	
	  l. In the DWORD Editor dialog box that appears, type "600" (without the
	     quotation marks) in the Data box, click Decimal, and then click OK.
	
	  m. Click Exit on the Registry menu to quit Registry Editor.
	
	3. Start the Exchange Information Store service. To do so:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Services.
	
	  c. In the Service list, click Microsoft Exchange Information Store, and then
	     click Start.
	
	  d. Click Close.
	
	4. Allow the scheduled information store maintenance to occur. By default,
	  information store maintenance tasks are scheduled to run daily between 12:00
	  midnight and 6:00 A.M. You can set the information store maintenance schedule
	  to Always, which means that tasks are scheduled to run every 15 minutes, but
	  make sure that you set it back to your original schedule after the "ghost"
	  objects are removed from the public folders hierarchy.
	
	5. Repeat step 1 to stop the Exchange Information Store service.
	
	6. Remove the registry values that you added in step 2. To do so:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "regedt32" (without the quotation marks), and then
	     click OK.
	
	  c. Locate, and then click the following registry values:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPublic\Secure
	  Folder Aging Latency
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPublic\Automatic
	  Folder Move Age Limit
	
	  d. For each value, click Delete on the Edit menu, and then click Yes to
	     confirm the deletion.
	
	  e. Click Exit on the Registry menu to quit Registry Editor.
	
	7. Repeat step 3 to start the Exchange Information Store service.
	
	8. Run the DS/IS consistency checker. For more information about how to do this,
	  click the article number below to view the article in the Microsoft Knowledge
	  Base:
	
	  Q182979 XADM: Function and Effects of Running the DS/IS Consistency Adjuster
	
	  NOTE: Make sure that no connectivity issues exist before you do this step. If
	  any connectivity issues exist, public folders from sites to which you cannot
	  connect are rehomed on your server.
	
	9. Restart all Exchange servers in your site.
	
	MORE INFORMATION
	================
	
	For additional information about Information Store maintenance tasks, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q159196 XADM: Tasks Controlled by the IS Maintenance Schedule
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
