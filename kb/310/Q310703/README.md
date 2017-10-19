---
layout: page
title: "Q310703: Security Roll-Up Fix Q299444 May Cause Lexmark Printers to Hang"
permalink: /kb/310/Q310703/
---

## Q310703: Security Roll-Up Fix Q299444 May Cause Lexmark Printers to Hang

	Article: Q310703
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbprint kbDriver
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply the Q299444 security roll-up fix, the Lexmark Printer driver may
	stop responding (hang).
	
	Q299444 stores the local procedure call (LPC) port data in the client thread and
	makes sure a reply comes back via the same port. This results in a more secure
	callback routine, but stops bidirectional communication with the Lexmark
	software.
	
	NOTE: This behavior can also occur with programs that use Distributed Component
	Object Model (DCOM) technology or remote procedure call (RPC) technology, such
	as Zone Labs' ZoneAlarm firewall software.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem immediately, download the fix as instructed below or
	contact Microsoft Product Support Services to obtain the fix. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  English: DownloadDownload Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34268)
	
	  Czech: DownloadDownload csy_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34272)
	
	  Danish: DownloadDownload dan_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34275)
	
	  Dutch: DownloadDownload nld_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34287)
	
	  Finnish: DownloadDownload fin_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34452)
	
	  French: DownloadDownload fra_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34281)
	
	  German: DownloadDownload deu_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34270)
	
	  Hungarian: DownloadDownload hun_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34284)
	
	  Italian: DownloadDownload ita_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34286)
	
	  Norwegian: DownloadDownload nor_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34288)
	
	  Polish: DownloadDownload plk_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34289)
	
	  Portuguese (Brazilian): DownloadDownload ptb_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34271)
	
	  Russian: DownloadDownload rus_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34290)
	
	  Spanish: DownloadDownload esp_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34278)
	
	  Swedish: DownloadDownload sve_Q310703i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=34291)
	
	Release Date: December 3, 2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time   Version        Size     File name   Platform
	  -------------------------------------------------------------
	  10/16/01  22:14  4.0.1381.7097  343,824  Rpcrt4.dll  Intel
	  10/16/01  22:19  4.0.1381.7097  602,896  Rpcrt4.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbDriver 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
