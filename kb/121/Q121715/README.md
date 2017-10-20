---
layout: page
title: "Q121715: PC NT: Err Msg: Mail Could Not Read the Entire Message..."
permalink: /kb/121/Q121715/
---

## Q121715: PC NT: Err Msg: Mail Could Not Read the Entire Message...

{% raw %}

	Article: Q121715
	Product(s): Microsoft Mail For PC Networks
	Version(s): winnt:3.5; :
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	3.50 3.20 3.20a
	WINDOWS
	kbinterop kbfile
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 3.5 
	- Microsoft Mail for Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows NT version 3.5 Workstation or Server sends mail to or receives
	mail from a Microsoft Mail client, you receive the following error message:
	
	  Mail System Error
	
	  Mail could not read the entire message from the post office.
	  Some parts of the message may be missing.
	  Ask sender to resend the message.
	
	CAUSE
	=====
	
	The Windows NT Workstation and Server Mail client incorrectly zeros out some
	fields in the .MAI file.
	
	
	RESOLUTION
	==========
	
	Microsoft fixed this problem in an updated version of the Windows NT file,
	MSSFS32.DLL.
	
	To apply MSSFS32.DLL:
	
	1. Download the self-extracting archive file, MSSFS32.EXE.
	
	2. Copy the file to the WINNT\SYSTEM32 directory on your hard drive.
	
	3. Rename the original MSSFS32.DLL to MSSFS32.OLD.
	
	4. Type the command "MSSFS32.EXE" (without the quotation marks) and press ENTER.
	
	5. Restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. An updated version of MSSFS32.DLL is now
	available. However, the new file, MSSFS32.DLL has not been fully
	regression-tested. Microsoft does not recommend implementing it without first
	testing it in a trial environment. Use of the updated MSSFS32.DLL file is at
	your own risk.
	
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Mssfs32.exe now
	  (http://download.microsoft.com/download/winnt351/Update/1.0/N351/EN-US/Mssfs32.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: prodnt 3.20 3.20a S14 980
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbOSWinSearch kbOSWinNT350 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbOSWinNTSearch
	Version           : winnt:3.5; :
	
	=============================================================================
	

{% endraw %}
