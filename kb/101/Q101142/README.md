---
layout: page
title: "Q101142: PC Forms: Compatibility with Windows NT Mail32"
permalink: /kb/101/Q101142/
---

## Q101142: PC Forms: Compatibility with Windows NT Mail32

{% raw %}

	Article: Q101142
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Electronic Forms Designer is not compatible with the Mail32 client
	that is included with Microsoft Windows NT.
	
	To use Electronic Forms Designer with Windows NT, the 16-bit Windows client must
	be used.
	
	RESOLUTION
	==========
	
	This issue is addressed in the Microsoft Electronic Forms Designer setup for
	running on Windows NT. You can find FRMUPD.EXE, a self-extracting file, on the
	following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile FRMUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get FRMUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download FRMUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	For more information about this update, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q113083 PC Forms: WA0720: User Setup for Running on Windows NT
	
	MORE INFORMATION
	================
	
	MSMAIL32.EXE is a 32-bit Windows client for Microsoft Mail. The Electronic Forms
	Designer includes a 16-bit dynamic-link library (DLL), MEFLIB.DLL, which is
	called each time a custom form is accessed. The 32-bit MSMAIL32.EXE application
	cannot call the 16-bit MEFLIB.DLL because each uses different address spaces.
	This is not unique to Electronic Forms Designer--a 32-bit application cannot
	access a 16-bit .DLL.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
