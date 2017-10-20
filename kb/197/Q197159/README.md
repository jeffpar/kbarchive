---
layout: page
title: "Q197159: Dr. Watson Error in IE 4.0 After Installation on Terminal Server"
permalink: /kb/197/Q197159/
---

## Q197159: Dr. Watson Error in IE 4.0 After Installation on Terminal Server

{% raw %}

	Article: Q197159
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Explorer, Version 5.5 or 6.0
	-----------------------------------------------
	
	When you install Windows NT4 Terminal Server, if you do not install Microsoft
	Internet Explorer 4 during the Terminal Server setup, and instead install either
	Microsoft Internet Explorer 5.5 or 6.0 after Terminal Server setup is complete,
	the installation will succeed, but Internet Explorer will not run. When you
	start Internet Explorer after the installation is complete, you may receive the
	splash screen and then nothing. If you check the Advanced Properties in Internet
	Explorer, they may be blank.
	
	Microsoft Internet Explorer, Version 4
	--------------------------------------
	
	After you install Terminal Server and select Internet Explorer 4.0 to be
	installed at the initial setup, Internet Explorer 4.0 may generate a Dr. Watson
	error or an access violation when trying load a Web page. Also, in the
	Properties page for Internet Explorer, the Advanced Properties are blank.
	
	Or, you do not install Internet Explorer with Terminal Server. When you attempt
	to install Internet Explorer, the following error message may appear:
	
	  The installation of a previous program was never completed. We recommend
	  restarting your computer before running Internet Explorer 4.01 SP1 Setup. Do
	  you want to continue with Setup?
	
	You may also experience a problem installing Microsoft Office 2000. The
	installation may not succeed because of an access violation.
	
	CAUSE
	=====
	
	On a computer with 1.3 GB of RAM or more and about 3 GB of free disk space on
	the system partition, GUI-mode Setup configures a default paging file for 1.3 GB
	of RAM of 2.9 GB (2.25 times physical RAM) minimum .
	
	When the paging file is about to be created, Session Manager adds the RAM size to
	the paging file size to get the maximum size of the paging file, which adds up
	to 4.2 GB. However, the memory subsystem in Windows NT only supports paging
	files up to 4 GB. This behavior is by design and cannot be changed.
	
	Therefore, Session Manager does not create the paging file. Because this is the
	only paging file on the system, you run without a paging file and experience the
	symptoms listed in the "Symptoms" section.
	
	If this condition holds, then the temporary pagefile will be located under the
	%SystemRoot%\system32 directory, and will be called "Tempf.sys" with a size of
	25 megabytes.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Window NT Server 4.0, Terminal Server Edition, service pack that
	contains this fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size    File name  Platform
	  -----------------------------------------------
	  05/16/2000  06:32p  80,656  Smss.exe   Alpha
	  05/15/2000  05:44p  45,328  Smss.exe   Intel
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Install Terminal Server without installing Internet Explorer 4.0. When
	  Terminal Server is installed and you are able to log on to it, make sure that
	  the paging file actually exists by running a WINMSD command, and then look
	  for the Pagefile.sys file. If one does not exist, create a pagefile on
	  another partition, and then restart the computer. Again verify that there is
	  a pagefile. If there is, then Internet Explorer 4, 5.5 or 6 will install and
	  run.
	
	- If Terminal Server is already installed with Internet Explorer 4.0 and the
	  problem is already appearing, uninstall Internet Explorer 4.0. You may have
	  to run the IEREMOVE utility to completely uninstall Internet Explorer 4.0.
	  Verify that the paging file exists, resize it, and/or make another paging
	  file on another partition. Restart the Terminal Server computer and then
	  verify with WINMSD and a physical check that the paging file is the correct
	  size and is being used. Then, install Internet Explorer 4.0 from the Terminal
	  Server compact disc.
	
	- Another option is to use a 2-GB FAT partition on the boot drive. This will
	  retain the original paging file that is created during setup. Part of the
	  process in converting from FAT to NTFS on the boot drive requires that the
	  Pagefile.sys file be deleted and then re-created when the conversion process
	  completes. Running the conversion process manually after installation was not
	  able to reproduce this behavior.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To use the hotfix file for new Terminal Servers, rename the Smss.exe file to
	Smss.ex_, and then copy it to a network distribution share. Install Service Pack
	6 for Terminal Server and apply the hotfix again when you are finished with
	Setup.
	
	You can also install Service Pack 6 and the fix after GUI-mode Setup is finished.
	You see the paging file after the next reboot, and you can then start installing
	programs.
	
	Additional query words: IE4 tse AV
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
