---
layout: page
title: "Q274592: SMS: Office 2000 SMS 1.2 Fix May Cause Programs to Not Install"
permalink: /kb/274/Q274592/
---

## Q274592: SMS: Office 2000 SMS 1.2 Fix May Cause Programs to Not Install

{% raw %}

	Article: Q274592
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,1.2 SP4
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbsms120 kbsms120bug kbPCM kbPackage kbSoftwareDist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Systems Management Server (SMS) version 1.2 hotfix for
	Microsoft Office 2000 distribution on computers that are running Microsoft
	Windows 95, Microsoft Windows 98, Microsoft Windows 98 Second Edition, or
	Microsoft Windows Mellinnium Edition (Me), packages that spawn child processes
	do not finish and you may receive the following error message:
	
	  Unable to open self-extracting EXE
	
	
	CAUSE
	=====
	
	This problem occurs when the SMS package, or program, that is called by Pcmuncw9
	requires another process to be spawned and closes the parent process handle.
	Package Command Manager (PCM) then interperets that the program is finished
	which causes PCM to close the mapped drive for the program; however, the program
	is not finished.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next SMS service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time      Version         Size     File name     Platform
	  --------------------------------------------------------------------
	  4/10/2001  5:39:46  1.2(Build 786)  16,256b  Pcmuncw9.exe  Intel
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	1. Revert to the previous version of Pcmwin16.exe because the original Service
	  Pack 4 (SP4) version of Pcmwin16.exe did not call Pcmuncw9.exe, which causes
	  the Office environment variable to not be set.
	
	  -or-
	
	2. After you apply the hotfix, use a batch file that calls %pcmunc%\%1 %2 %3 %4
	  and so on, and then modify all of your package commands to call this batch
	  file with each designated program and the program's arguments. This procedure
	  does work but you may need to modify hundreds of package command which may be
	  unreasonable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To install this hotfix across your organization, replace the existing version of
	the Pcmuncw9.exe file on the SMS site server, and then open and save the
	System.map file in the SMS folder. The Pcmuncw9.exe file is in the following
	folder:
	
	  Sms\Site.srv\Maincfg.box\Client.src\X86.bin
	
	For additional information about this procedure, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	
	For more information about this problem, view the following Microsoft Web site:
	
	  http://www.microsoft.com/office/ork/2000/appndx/toolbox.htm#smsinfo
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbsms120 kbsms120bug kbPCM kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS120 kbSMS120SP4
	Version           : :1.2,1.2 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
