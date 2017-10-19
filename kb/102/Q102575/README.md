---
layout: page
title: "Q102575: INFO: Obtaining Group/Item Info from ProgMan Using DDEML"
permalink: /kb/102/Q102575/
---

## Q102575: INFO: Obtaining Group/Item Info from ProgMan Using DDEML

	Article: Q102575
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWinNT350 kbOSWinNT351 kbOSWin310 _IK kbOSWin300
	Last Modified: 12-MAY-2001
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dynamic-data exchange (DDE) can be used to obtain group and/or item information
	from Program Manager. Many applications, especially setup applications, need
	this information before items or groups are added/deleted from Program Manager.
	Information such as group names, group filenames, the number of items in a
	group, an item's working directory, title, xpos, ypos, and so forth, can be
	obtained very easily from Program Manager through DDE. This article discusses
	how to obtain this type of information from Program Manager using DDEML.
	
	MORE INFORMATION
	================
	
	Program Manager is a DDEML server that provides DDE client applications with
	valuable information regarding group windows and items inside the group
	windows.
	
	DDEML client applications have to connect to Program Manager with PROGMAN/PROGMAN
	as SERVICE/TOPIC names. (Program Manager also supports SHELL/APPPROPERTIES
	service/topic names.) Once connected, the client application needs to REQUEST
	group/item information from Program Manager by issuing a request transaction.
	
	Group Information
	-----------------
	
	To obtain names of all the groups currently in Program Manager, the client has to
	issue a request transaction with the item name set to "GROUPS". The request has
	to be made in CF_TEXT format.
	
	The return value from this transaction is a data handle that contains the names
	of all the groups in Program Manager. Each group name is separated by a carriage
	return (\r\n). The following code sample requests names of all the groups from
	Program Manager:
	
	     ghszItem = DdeCreateStringHandle(idInst,"GROUPS",
	
	     CP_WINANSI);
	
	          hProgData = DdeClientTransaction(NULL,
	
	     // pointer to data to pass
	                                                    // to server
	                          0,            // length of data
	                          ghszConv,     // handle to conversation
	                          ghszItem,     // handle to item-name
	                                                    // string
	                          CF_TEXT,      // clipboard format
	                          XTYP_REQUEST, // transaction type
	                          5000,         // transaction timeout
	                          NULL);       // pointer to result
	
	     retVal =  DdeGetData(hProgData, (void FAR*)szBuffer,
	                             sizeof(szBuffer),  0) ;
	        MessageBox(NULL, szBuffer, "TEST", MB_OK) ;
	
	If there are four groups in Program Manager (for example, Main, Accessories, SDK,
	and Applications), then the message-box call will display names of all these
	groups, one per line.
	
	Item Information
	----------------
	
	To obtain information regarding all the items in a group, the client application
	has to issue a request transaction to Program Manager, this time with the item
	name set to the name of the group. For example, if the client application needs
	to find out if an item exists in Program Manager group "Main", or if it needs to
	find out all the items that are in group Main, then the call to
	DdeCreateStringHandle() above must be changed to
	
	     ghszItem = DdeCreateStringHandle(idInst,"MAIN", CP_WINANSI);
	
	to create a string handle for the appropriate item name, Main.
	
	The return value from this transaction is a data handle that contains names of
	all the items in the group Main. A typical example of the data inside resembles
	the following:
	
	     "MAIN",C:\WINDOWS\MAIN.GRP,5,3
	     "MS-DOS","DOSPRMPT.PIF",,PROGMAN.EXE,166,4,9,0,0
	     "Mail","MSMAIL.EXE",,C:\WINDOWS\MSMAIL.EXE,258,2,0,0,0
	     "Write","WRITE.EXE",,C:\WINDOWS\WRITE.EXE,384,48,0,0,0
	     "File","WINFILE.EXE",,C:\WINDOWS\WINFILE.EXE,6,2,0,0,0
	     "Brief ","B.PIF",,PROGMAN.EXE,93,49,2,0,0
	
	Program Manager provides the list in CF_TEXT format. The fields of group
	information are separated by commas. The first line of the information contains
	the group name (in quotation marks), the path of the group file, and the number
	of items in the group.
	
	NOTE: The last value on line 1 is not documented in the Windows Software
	Development Kit (SDK); it can be any value between 1 and 8. This is the same
	value that is passed as the second param to the ShowGroup() command. This value
	indicates the state of the group window, whether minimized, active, and so
	forth.
	
	In this particular case, the group window Main is currently the active group and
	is maximized.
	
	For more information on this value, please refer to the ShowGroup() command
	documentation in Section 17.2.2 of the Windows 3.1 SDK "Programmer's Reference,
	Volume 1: Overview."
	
	Each subsequent line contains information about an item in the group, including
	the command line (in quotation marks), the default directory, the icon path, the
	position in the group, the icon index, the shortcut key (in numeric form), and
	the minimize flag.
	
	This set of information for each item corresponds to the parameters passed to the
	AddItem() function when each item was added to the group. For more information
	on each of these parameters, refer to the AddItem() command documentation on
	Section 17.2.5 of the Windows 3.1 SDK, "Programmer's Reference, Volume 1:
	Overview."
	
	
	Additional query words: GPF gp-fault
	
	======================================================================
	Keywords          : kb16bitonly kbOSWinNT350 kbOSWinNT351 kbOSWin310 _IK kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1; winnt:3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
