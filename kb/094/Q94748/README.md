---
layout: page
title: "Q94748: PC Rmt: Mail Remote for MS-DOS MAIL.EXE 3.0.2 Update"
permalink: /kb/094/Q94748/
---

## Q94748: PC Rmt: Mail Remote for MS-DOS MAIL.EXE 3.0.2 Update

{% raw %}

	Article: Q94748
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for MS-DOS, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the MAIL.EXE that is included with versions
	2.1 and 3.0 of Microsoft Mail Remote for MS-DOS.
	
	For complete information about obtaining and installing the MAIL.EXE file, see
	the following sections:
	
	- To download the updated file
	
	- To update your MAIL.EXE file
	
	MORE INFORMATION
	================
	
	This update contains MAIL.EXE, a replacement for the MAIL.EXE file that is
	included with versions 2.1 and 3.0 of Microsoft Mail Remote for MS-DOS. This
	update provides the following functionality:
	
	- It adds the ability to save attachments sent from the Microsoft Mail
	  Connection gateway and the Microsoft Mail for PC Networks, Macintosh
	  workstation.
	
	- It corrects a problem with the X.400 gateway where the message body is forced
	  into a T.61 attachment instead of an IA5 attachment. When the remote client
	  sends mail to X.400 recipients that cannot accept T.61 attachments, the
	  entire message is rejected.
	
	- It correctly displays FFAPI network/postoffice entities defined on the remote
	  user's home postoffice that have a Service Type = 100.
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Rmtupd.exe now
	  (http://download.microsoft.com/download/pcmail/Update/18/WIN/EN-US/Rmtupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download RMTUPD.EXE to a clean directory, run it (by typing "rmtupd"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  MAIL.EXE (221,089 bytes, dated 02-15-93, 3:00 P.M.)
	  README.TXT
	
	To update your MAIL.EXE file
	----------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive:>\mail.exe <destination> " (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self- extracting
	RMTUPD.EXE file and <destination> is the drive and directory where your
	Mail Remote MAIL.EXE file currently resides. For example, if you ran the
	self-extracting file from the TEST directory on drive D, and your MAIL.EXE file
	is located in the MSREMOTE directory on drive C, type the following commands:
	
	  copy d:\test\mail.exe c:\msremote
	
	Additional query words: 3.00b wga mac Macintosh
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote300DOS kbMailRemote210DOS
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
