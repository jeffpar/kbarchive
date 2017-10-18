---
layout: page
title: "Q183274: XFOR: Queue Viewer Does Not Load; Missing RPCDCE4.DLL"
permalink: kb/183/Q183274/
---

## Q183274: XFOR: Queue Viewer Does Not Load; Missing RPCDCE4.DLL

	Article: Q183274
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A dialog box may appear that contains the following error message:
	
	  Popup error: lsmexout.exe - Unable to Locate DLL The dynamic link
	  library RPCDCE4.dll could not be found in the specified path.
	
	This may occur under any of these conditions:
	
	- When the Exchange Notes Connector (LinkAge Message Exchange version 3.2)
	  starts, the dialog box may appear.
	
	  -or-
	
	- The Queue Viewer may not load and the connector can generate the dialog box
	  that contains the error message.
	
	  -or-
	
	- After the LinkAge Connector property pages are loaded, the Exchange
	  Administrator program may cause a dialog box with the same error Message to
	  appear.
	
	MORE INFORMATION
	================
	
	LinkAge now packages the Rpcdce4.dll file into the LinkAge Message Exchange
	version 3.2 product. It is installed in the Linkage directory. Microsoft Windows
	NT 3.51 systems have this DLL file in the Winnt\System32 directory, but Windows
	NT 4.0 systems do not.
	
	To resolve the problem, obtain this DLL file from the Linkage\Redist directory or
	from a Windows NT 3.51 computer and copy it to any directory that is in the
	system path.
	
	If you are running the Exchange Administrator program remotely and you do not
	have the Rpcdce4.dll file in your system path, you should obtain it from the
	Linkage\Redist directory on the connector computer, and put it in any directory
	that is in your Windows NT 4.0 system path.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2; winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
