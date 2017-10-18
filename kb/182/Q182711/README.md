---
layout: page
title: "Q182711: IE 3.0x Fails to Start Batch File Served by IIS"
permalink: kb/182/Q182711/
---

## Q182711: IE 3.0x Fails to Start Batch File Served by IIS

	Article: Q182711
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Explorer versions 3.0, 3.02a, 3.03 for Windows 3.1 
	- Microsoft Internet Explorer versions 3.0, 3.02a, 3.03 for Windows NT 3.51 
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you try to access a batch file held on a WWW server using Internet Explorer
	3.0 running on Windows for Workgroups 3.11 and previous releases or Windows NT
	3.51, the file is displayed as plain text.
	
	Neither Internet Explorer 3.0 nor Internet Explorer 4.0 on Windows 95 or Windows
	NT 4.0 exhibits this behavior.
	
	CAUSE
	=====
	
	By default, any file sent by the WWW server on Internet Information Server that
	has an unrecognized MIME type is returned to the client as a blank MIME type.
	
	With Internet Explorer 3.0 and Internet Explorer 4.0 on Windows 95 and Windows NT
	4.0, the file system association is used, if one exists.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, you must make changes to both the server and the
	client. The server modification is to create a MIME type for the .bat extension.
	The client modification is to register the appropriate action for this MIME
	type. Both of these changes are detailed below.
	
	Internet Information Server
	---------------------------
	
	Under Internet Information Server, add the MIME entry using the Registry Editor.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\InetInfo\Parameters\MimeMap
	
	3. To add an entry, open the MimeMap key and choose Edit Value or Add Value.
	
	4. The MIME information must be placed in the Value Name box. The data type for
	  the entry should be set to REG_SZ, and the string field should be left blank.
	  The following is an example of a MIME entry:
	
	  Value Name: application/batch,bat,,0
	  Data Type:  REG_SZ
	  Data:       (This should be blank)
	
	5. Restart the WWW service for this setting to take effect.
	
	Internet Explorer 3.0
	---------------------
	
	Internet Explorer 3.0 clients must have the new MIME type defined as detailed
	below:
	
	1. With Internet Explorer running, on the View menu, click Options, click the
	  Programs tab, and then click the File Types tab.
	
	2. In the Registered File Types box, click Add.
	
	3. Configure the file type as follows:
	
	  Description:        application batch file
	  MIME Type:          application/batch
	  Suffixes            .bat
	  Encoding:           Text
	  Helper Application: command.com /c %s
	
	4. Click OK until all dialog boxes are closed.
	
	Further information on adding MIME types can be found in the following Microsoft
	Knowledge Base articles:
	
	  Q142558 : Adding Mime Types to Internet Information Server
	
	  Q170802 : Internet Explorer Prompts to Download Files
	
	Additional query words: ie3 ie2 batch bat
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbIEsearch kbiis300 kbiis200 kbiis100 kbZNotKeyword2 kbIENT351Search kbIE310Search kbZNotKeyword3 kbIE300Win310 kbIE302aWin310 kbIE303Win310 kbIE300WinNT351 kbIE302aWinNT351 kbIE303WinNT351
	Version           : WINNT:1.0,2.0,3.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbprb
	
	=============================================================================
	
