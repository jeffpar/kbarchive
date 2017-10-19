---
layout: page
title: "Q141739: BUG: Sendmail.scx Hangs FoxPro If Mail Client Not Installed"
permalink: /kb/141/Q141739/
---

## Q141739: BUG: Sendmail.scx Hangs FoxPro If Mail Client Not Installed

	Article: Q141739
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Sendmail.scx example runs under Windows 95 on a computer that does not
	have Microsoft Exchange installed, Visual FoxPro hangs (stops responding). Also,
	placing the Mapibtn.vcx class library on a form and running the form causes the
	same behavior.
	
	CAUSE
	=====
	
	The Mailbtn.vcx class library does not check for the installation of Microsoft
	Exchange or a mail client. Also, the MapiSession control should not hang if the
	SignOn method executes and no mail clients are installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	WARNING: Close all running applications and save your data before following this
	procedure. To close all open applications, press CTRL+ALT+DEL to open the
	Windows Task List, and then close all the other applications you have running.
	Note that following these steps may produce lost allocation units, lost
	clusters, or cross-linked files.
	
	On a computer running Windows 95 without any mail clients installed, type the
	following in the Command window:
	
	     SET DEFAULT TO SYS(2004)+"Samples\Ole"
	     DO FORM Sendmail.scx
	
	On a computer running Windows 95 without a mail client installed, an hour glass
	appears and remains indefinitely. Press CTRL+ALT+DEL to invoke the Close Program
	window, select Microsoft Visual FoxPro, and click End Task.
	
	Additional query words: VFoxWin buglist3.00 buglist3.00b
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
