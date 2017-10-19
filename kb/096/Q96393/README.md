---
layout: page
title: "Q96393: Drive Letter Icons Unavailable with the FTP TCP/IP Protocol"
permalink: /kb/096/Q96393/
---

## Q96393: Drive Letter Icons Unavailable with the FTP TCP/IP Protocol

	Article: Q96393
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SYMPTOMS
	========
	
	If you use the TCP/IP protocol stack from FTP Software in 386 enhanced mode of
	Windows or Windows for Workgroups, the drive letter icons in File Manager may be
	unavailable.
	
	This problem does not occur with the Windows for Workgroups real-mode redirector.
	
	RESOLUTION
	==========
	
	FTP Software has confirmed this to be a problem with its current driver and
	provides an updated driver to correct this problem. (FTP Software provides
	drivers that allow Windows for Workgroups systems to communicate over the TCP/IP
	protocol stack.)
	
	The updated file (WFWFTP.386) is dated 12/23/93 and has a file size of 9344
	bytes. It should be copied into the \WINDOWS\SYSTEM subdirectory and then
	referenced in the [386Enh] section of the SYSTEM.INI file as follows:
	
	       device=WFWFTP.386
	
	NOTE: If you already have FTP's TCP/IP installed, you should only need to copy
	the updated driver to the \WINDOWS\SYSTEM subdirectory. The device= line should
	already be in the SYSTEM.INI file.
	
	For more information, contact FTP software.
	
	
	Additional query words: 3.10 File WFWFTP TCPIP dimmed grayed out greyed
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
