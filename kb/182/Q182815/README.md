---
layout: page
title: "Q182815: FP: Permissions Command is Not Available on the Tools Menu"
permalink: /kb/182/Q182815/
---

## Q182815: FP: Permissions Command is Not Available on the Tools Menu

{% raw %}

	Article: Q182815
	Product(s): Word Front Page
	Version(s): WINDOWS:1.1, 97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194488.
	
	SYMPTOMS
	========
	
	When you click the Tools menu in FrontPage Explorer, Permissions is not
	available (dimmed).
	
	CAUSE
	=====
	
	This problem occurs if any of the following are true:
	
	- You have a disk-based Web open.
	
	  -or-
	
	- The content root of the Internet Information Server is on a FAT file system.
	
	  -or-
	
	- FrontPage permissions on the server are disabled.
	
	RESOLUTION
	==========
	
	Use one of the following methods to have the Permissions command available on
	the Tools menu.
	
	Method 1: If You Have a Disk-based Web Open
	-------------------------------------------
	
	Publish your Web to a Web server. For information about how to do this, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q161414 FP97: How to Publish a FrontPage Web to the Internet, Intranet
	
	Method 2: If the Content Root of the IIS is on a FAT File System
	----------------------------------------------------------------
	
	Convert the file system to an NTFS file system.
	
	WARNING: Using this method will permanently convert your system from FAT to NTFS.
	For more information about converting from FAT to NTFS, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q98730 Q&A: Technical Information
	
	  Q156560 Free Space Required to Convert FAT to NTFS
	
	
	To convert the file system to NTFS, follow these steps:
	
	1. Uninstall the FrontPage Server Extensions.
	
	  a. On the Windows Start menu, point to Programs, and then click Windows NT
	     Explorer.
	
	  b. Open the Microsoft FrontPage folder. By default, FrontPage is installed in
	     the c:\Program Files\Microsoft FrontPage folder.
	
	  c. Double-click the FrontPage Server Administrator icon.
	
	  d. In the Select Server Or Port box in the FrontPage Server Administrator
	     dialog box, click the port that corresponds to the Internet Information
	     Server. By default this is port 80.
	
	  e. Click Uninstall.
	
	  f. Click OK.
	
	2. Convert the file system to NTFS.
	
	  a. On the Windows Start menu, point to Programs, and click Command Prompt.
	
	  b. At the command prompt, type the following command
	
	  "convert <disk>: /fs:ntfs" (without the quotation marks)
	
	     where <disk> is the location where your Web server content is stored.
	     For example if your Web server content is stored on drive D, type the
	     following command:
	
	  "convert d: /fs:ntfs" (without the quotation marks)
	
	  c. When the conversion is completed, type EXIT and press ENTER to return to
	     Windows.
	
	3. Install the FrontPage Server Extensions.
	
	  a. On the Windows Start menu, point to Programs, and click Windows NT
	     Explorer.
	
	  b. Open the Microsoft FrontPage folder. By default, FrontPage is installed in
	     the c:\Program Files\Microsoft FrontPage folder.
	
	  c. Double-click the FrontPage Server Administrator icon.
	
	  d. In the FrontPage Server Administrator dialog box, click Install.
	
	  e. From the Server Type list, click Internet Information Server and then
	     click OK.
	
	  f. Click OK.
	
	  g. After the FrontPage Server Extensions are installed, click Close.
	
	Method 3: If FrontPage Permissions on the Server Were Disabled
	--------------------------------------------------------------
	
	You can configure the FrontPage Server Extensions not to manage the permissions
	on your FrontPage Webs. To enable or disable this functionality, you must edit
	the configuration files used by the FrontPage Server Extensions.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q310931 FPSE2000: Where to Find the FrontPage 2000 Server Extensions Resource
	  Kit (SERK)
	
	MORE INFORMATION
	================
	
	For additional information about using permissions with FrontPage, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q151351 FP: Web Permissions Must Be Unique to Be Modified
	
	  Q170235 FP: End User Permissions Disabled on Netscape Server
	
	For additional information about installing the FrontPage Server Extensions on
	Internet Information Server, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q156842 FP: How to Install FrontPage Server Extensions for IIS
	
	Additional query words: permissions explorer ntfs fat
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : WINDOWS:1.1, 97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
