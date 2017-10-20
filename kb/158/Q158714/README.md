---
layout: page
title: "Q158714: XCLN: Files Required for Eximwiz.exe"
permalink: /kb/158/Q158714/
---

## Q158714: XCLN: Files Required for Eximwiz.exe

{% raw %}

	Article: Q158714
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange utility Eximwiz, which converts an Exchange "csv" file to
	a MS Mail Import file, requires more files than are included in the current
	TechNet compact disc.
	
	MORE INFORMATION
	================
	
	In addition to the two files, Eximwiz.exe and Msmapi32.ocx, included on the
	Microsoft Exchange Technical Resource Kit compact disc on TechNet, you also the
	following files, available in the runtime distribution of Visual Basic 4.0:
	
	  comctl32.ocx
	  comdlg32.ocx
	  msvcrt.dll
	  olepro32.dll
	  vb40032.dll
	
	NOTE: The utility Eximwiz must be run in Microsoft Exchange Server.
	
	
	This information applies to the first version of EXIMWIZ.exe.
	
	The most recent version of this utility that includes the files referenced herein
	can be found in the Eximwiz.exe file.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Eximwiz.exe now
	  (http://download.microsoft.com/download/bofficesrv25/Update/1/NT45/EN-US/Eximwiz.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Before installing the newest version of this utility, it is recommended that you
	first remove the Microsoft Exchange EXIMWIZ Utililty via Control Panel
	Add/Remove Programs. Then download the Readme.txt and follow intructions for
	downloading and installing the EXIMWIZ Utililty fix.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
