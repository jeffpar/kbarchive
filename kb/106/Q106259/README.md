---
layout: page
title: "Q106259: FAX: Gateway to Fax Version 3.0.1 Update"
permalink: /kb/106/Q106259/
---

## Q106259: FAX: Gateway to Fax Version 3.0.1 Update

{% raw %}

	Article: Q106259
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0a
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the FAXGTW.EXE file that is included with
	version 3.0a of Microsoft Mail Gateway to Fax.
	
	For complete information about obtaining and installing the FAXGTW.EXE file, see
	the following sections:
	
	- To download the updated file
	
	- To update your FAXGTW.EXE file
	
	MORE INFORMATION
	================
	
	This update contains FAXGTW.EXE, a replacement for the FAXGTW.EXE file that is
	included with version 3.0a of Microsoft Mail Gateway to Fax. This update
	resolves problems with the Gateway to Fax generating invalid mail messages. The
	following two types of messages were corrected:
	
	- Incoming fax messages (a message with a fax attachment).
	
	- Fax Delivery Status Report messages (a message sent to the sender of an
	  outgoing fax message indicating whether or not the fax message was sent)
	
	The Fax gateway generates the following error messages, which are sent from the
	POSTMASTER mailbox account:
	
	- From the MS-DOS client:
	
	  Notice 142
	  This message is corrupt and can not be accessed.
	  Contact your administrator.
	
	- From the Windows client:
	
	  ===== MAIL SYSTEM ERROR =====
	  Mail could not read the entire message from the postoffice.
	  Some of the parts of the message may be missing. Ask the sender to resend the
	  message.
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Faxgtw.exe now
	  (http://download.microsoft.com/download/pcmail/Update/4/DOS/EN-US/Faxgtw.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download FAXGTW.EXE to a clean directory, run it (by typing "faxgtw"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  FAXGTW.EXE (139,686 bytes, dated 08-27-93, 11:17 A.M.)
	  README.TXT
	
	To update your FAXGTW.EXE file
	------------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\faxgtw.exe <destination>" (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self- extracting
	FAXGTW.EXE file and <destination> is the drive and directory where your
	FAXGTW.EXE file currently resides. For example, if you ran the self- extracting
	file from the TEST directory on drive D, and your FAXGTW.EXE file is located in
	the MAILEXE directory on drive C, type the following command:
	
	  " copy d:\test\faxgtw.exe c:\mailexe" (without the quotation marks)
	
	Additional query words: 3.00a wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300a
	Version           : MS-DOS:3.0a
	
	=============================================================================
	

{% endraw %}
