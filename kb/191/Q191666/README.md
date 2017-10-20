---
layout: page
title: "Q191666: Stop 0x00000050 When Printing to HP 5 or 6 Printer w/HP Driver"
permalink: /kb/191/Q191666/
---

## Q191666: Stop 0x00000050 When Printing to HP 5 or 6 Printer w/HP Driver

{% raw %}

	Article: Q191666
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Terminal Server responds with the following blue screen STOP error:
	
	  STOP 0x00000050 Page_Fault_in_Non-Paged_Area
	
	When you print numerous print jobs to a Hewlett Packard LaserJet 5 P/MP, 6P/MP,
	or 2000C printer using a Hewlett Packard driver.
	
	CAUSE
	=====
	
	There are compatibility issues with the current printer driver and Terminal
	Server.
	
	
	RESOLUTION
	==========
	
	Hewlett-Packard is developing an updated driver. To work around the problem, you
	can:
	
	- Use the Windows Terminal Server-provided drivers for the Hewlett-Packard 4
	  series printers. There is no loss of ray management or resolution.
	
	- For the 6P/MP printer:
	
	  The following file is available for download from the Microsoft Download
	  Center:
	
	  Download Download Nt4_6p.exe now
	
	  For additional information about how to download Microsoft Support files,
	  click the article number below to view the article in the Microsoft Knowledge
	  Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	  Microsoft used the most current virus detection software available on the date
	  of posting to scan this file for viruses. Once posted, the file is housed on
	  secure servers that prevent any unauthorized changes to the file.
	
	- For the 5P/MP, revert to using the driver that comes with Terminal Server,
	  not the one from the installation diskette.
	
	- Contact Hewlett-Packard to download the latest updated drivers. To do so,
	  click the following Hewlett-Packard FTP link or Web site:
	
	  ftp://ftp.hp.com/pub/printers/software/lj304en.exe
	
	  http://whp-web1.extweb.hp.com/cposupport/printers/support_doc/bpd06853.html
	
	NOTE: It may prove necessary to manually remove the existing print drivers from
	the Terminal Server prior to changing the print drivers. For additional
	information about the steps necessary to remove the appropriate printer drivers
	completely from the computer, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q135406 Steps to Manually Remove and Reinstall a Printer Driver
	
	  Q102116 How to Manually Delete Print Shares or Printers
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
