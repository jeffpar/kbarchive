---
layout: page
title: "Q188386: XFOR: Error Removing Directory Synchronization Objects"
permalink: /kb/188/Q188386/
---

## Q188386: XFOR: Error Removing Directory Synchronization Objects

	Article: Q188386
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When removing a directory synchronization server (DXA server), directory
	synchronization requestor, or a remote directory synchronization requestor using
	Microsoft Exchange Server Administrator program, you may receive the following
	error messages:
	
	  An internal processing error has occurred: Naming Violation
	  Microsoft Exchange Directory
	  ID no: DS_E_NAMING_VIOLATION
	
	  The object cannot be found in the directory.
	  This may be because replication has not completed.
	  Microsoft Exchange Directory
	  ID no: c1010aae
	
	  The attribute does not exist
	  Microsoft Exchange Directory
	  ID no: DS_E_NO_SUCH_ATTRIBUTE_OR_VALUE
	
	CAUSE
	=====
	
	These errors may occur if the Microsoft Mail Connector for PC Networks was
	removed through Add/Remove Components in the Exchange Server Setup before
	deleting the directory synchronization (dirsync) objects, (dirsync requestor,
	dirsync server, and so on) through the Microsoft Exchange Server Administrator
	program.
	
	WORKAROUND
	==========
	
	To work around this behavior, you need to delete the directory synchronization
	server object. To do this, follow these steps:
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  admin /r
	
	  WARNING: Using the raw mode of the Exchange Server Administrator program
	  (admin/r) incorrectly can cause serious problems that may require you to
	  reinstall Microsoft Windows NT Server and/or Microsoft Exchange Server.
	  Microsoft cannot guarantee that problems resulting from the incorrect use of
	  raw mode can be solved. Use raw mode at your own risk.
	
	2. Expand on Site, Configuration, Servers, <Server Object>, and then
	  select the Directory Service object.
	
	3. On the File menu, click Raw Properties.
	
	4. From the Object Attributes list, select the OBJ-DIST-NAME.
	
	5. Select the text in the Edit Value text box, copy it to the Clipboard, and
	  then click OK.
	
	6. Expand on Site, Configuration, Connections, and then select <Dirsync
	  Server Object>. On the File menu, click Raw Properties.
	
	7. In the Raw Properties dialog box, select All from the "List Attributes of
	  Type" drop-down box.
	
	8. Find the Responsible-Local-DXA property.
	
	9. Select the text in the Edit Value text box, and then paste the address of the
	  Directory Synchronization Object that you copied to the Clipboard in step
	  five.
	
	10. Click Set, and then click OK.
	
	11. Select the "Directory Synchronization Server Object" and delete it.
	
	  Doing so may generate a "Constraint_Violation" error message, but you should
	  be able to delete the object after the error.
	
	MORE INFORMATION
	================
	
	The proper way to remove a Microsoft Mail Connector is to remove the Directory
	Synchronization objects from within Exchange Server Administrator program before
	removing the component through the Setup Add/Remove feature.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
