---
layout: page
title: "Q275711: SNACFG Incorrectly Uses Long File Names"
permalink: /kb/275/Q275711/
---

## Q275711: SNACFG Incorrectly Uses Long File Names

	Article: Q275711
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a previously saved (dumped) SNA Server configuration file is loaded by
	using the Snacfg.exe utility, certain options for PRINTSESSION3270 may not
	function properly, if long file names or long paths are used.
	
	The following are the options that may not function properly:
	
	- /CUSTOMFILE:
	- /PDTFILE:
	- /PRINTTOFILE
	
	CAUSE
	=====
	
	The Snacfg.exe utility incorrectly adds entries that contain long file names or
	long paths because it includes quotation marks around the file name or path. For
	example, the following is a configuration property for a 3270 Print Session that
	uses a long path that is entered within quotation marks:
	
	  /PRINTTOFILE:"C:\sna4\system\Test Dir\Outfile.txt"
	
	When this entry is read by Snacfg.exe, the path is added to the Com.cfg file with
	the quotation marks, which causes an error when SNA Server tries to access the
	specified file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Snacfg.exe is an SNA Server command-line-based configuration utility. It can be
	used to save (dump) the contents of an SNA Server configuration file (Com.cfg)
	to a text file by using the following syntax:
	
	  "snacfg #<path\com.cfg> /print > <filename>" (without the
	  quotation marks)
	
	After configuration changes are made to the resulting text file, Snacfg.exe can
	be used to reload the configuration file by using the text file as an input
	script as follows:
	
	  "snacfg #<path\com.cfg> @<path\filename>" (without the quotation
	  marks)
	
	Additional query words: SNACFG unattended
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
