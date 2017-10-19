---
layout: page
title: "Q168130: SMS: Despooler Service Processes SNI Files Slowly"
permalink: /kb/168/Q168130/
---

## Q168130: SMS: Despooler Service Processes SNI Files Slowly

	Article: Q168130
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbDespooler smsdespooler
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After Systems Management Server jobs are canceled, it may appear that subsequent
	jobs remain in a Pending state. The Systems Management Server Despoolr.log file
	may display the following:
	
	  Despooler failed to execute the instruction, error code = 38a
	
	CAUSE
	=====
	
	Canceling a Systems Management Server job may corrupt the .sni file. This causes
	the Despooler service to process very slowly through each corrupt file, and
	display the message shown in the SYMPTOMS section of this article. These .sni
	files are job status MIFs returning from the client, and are processed before
	.ins files. It appears that Despooler is not getting to the Pending jobs.
	
	Additionally, deleting an Active job or deleting a job before it is completely
	canceled can also cause the error to occur.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size    File name     Platform
	  -------------------------------------------------
	
	  2/24/99   1:35pm   254,400 Smsinst.dll   X86
	  2/24/99   1:34pm   481,040 Smsinst.dll   ALPHA
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, examine the Sms\Site.srv\Despoolr.box\Receive
	directory and move all .sni files that are unrelated to current active jobs to a
	temporary subdirectory.
	
	The following are some good practices to implement:
	
	- If you cancel your jobs, do not delete them until they have been canceled for
	  48 hours.
	
	- If you are canceling jobs, do not cancel more than one at a time.
	
	- Do not delete Active jobs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	The hotfix changes the precedence of the Despooler's file processing. Previously
	the Despooler processed files in the following order:
	
	  .ist, .nil, .sni, .ins
	
	Now the Despooler processes .sni files last, according to this new order:
	
	  .ist, .nil, .ins, .sni
	
	Additionally, the Despooler processes files in batch. By default, the Despooler
	selects 50 files at a time. This hotfix allows the batch size to be configurable
	by means of a registry entry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To specify the Despooler batch size create the following registry key:
	
	  HKEY Local Machine\Software\Microsoft\SMS\Components\SMS_Despooler\
	  (DWORD) MaxFileEnum (decimal value)
	
	To install the hotfix, perform the following steps:
	
	1. Stop the SMS Executive service on the Systems Management Server site server.
	
	2. Replace the Smsinst.dll file in the \Site.srv\<Platform>.bin directory
	  with the version obtained from the hotfix.
	
	3. Restart the SMS Executive service.
	
	NOTE: You can perform Step 2 automatically by using Hotfix.exe with the provided
	Hotfix.ini file.
	
	Additional query words: prodsms slow hang delete
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
