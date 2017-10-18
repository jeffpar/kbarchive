---
layout: page
title: "Q195015: Option Pack Installation Conflicts with Service Pack 4"
permalink: kb/195/Q195015/
---

## Q195015: Option Pack Installation Conflicts with Service Pack 4

	Article: Q195015
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT Option Pack on a computer that already has Windows
	NT 4.0 Service Pack 4 (or greater) installed, the following error message is
	displayed:
	
	  Setup detected that Windows NT 4.0 SP4 or greater is installed on your
	  machine. We haven't tested this product on SP4. Do you wish to proceed?
	
	Click OK to continue the installation. After the setup program has completed and
	the computer has restarted, you can reapply Windows NT 4.0 Service Pack 4.
	
	NOTE: The following error message may also be displayed:
	
	  This setup utility is designed to run on Windows NT server. Please click OK
	  to exit.
	
	During the unattended installation of Windows NT Option Pack, this pop-up
	notification message causes the installation to stop. The INF file for the
	unattended installation of Windows NT Option Pack does not contain any
	parameters for acknowledging this pop-up message, which causes the unattended
	installation to not be successful.
	
	CAUSE
	=====
	
	This problem occurs because Windows NT Option Pack was released before the
	service pack and these messages indicate there may be a conflict among file
	versions between the two. When Windows NT Option Pack is installed, the setup
	program checks the OS to confirm that SP3 is installed. If SP3 is not installed,
	the installation stops. If the version check results in versions later than SP3,
	such as SP4, the pop-up notification message is displayed.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 that contains this fix.
	
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
	
	
	
	WORKAROUND
	==========
	
	To work around this problem and ensure your computer has the most updated files,
	perform one of the following:
	
	- Install Windows NT Option Pack before installing the service pack.
	
	- Reinstall the service pack after completing the Option Pack installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	Copy the content from the Windows NT Option Pack CD to a network share location,
	and then replace the Iis.dll and Preload.exe files from the Windows NT Option
	Pack CD with the Iis.dll and Preload.exe files from the hotfix zip file.
	
	
	
	
	Additional query words: ntop sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
