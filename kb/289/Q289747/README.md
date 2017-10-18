---
layout: page
title: "Q289747: Installing SFU 2.0 NIS in a Peer Domain Generates Error 26065"
permalink: kb/289/Q289747/
---

## Q289747: Installing SFU 2.0 NIS in a Peer Domain Generates Error 26065

	Article: Q289747
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Services for UNIX (SFU) 2.0 contains a NIS server component. When you
	install NIS on a peer domain in an existing forest, the install may not succeed
	and generate error 26065.
	
	For example, assume that you install Windows 2000 and create a new domain in a
	new forest. Then, you install NIS on this domain controller. The install
	succeeds and NIS works correctly. Later, you add a second domain to the same
	forest. When you try to install NIS on a domain controller in this peer domain,
	the NIS install does not succeed.
	
	CAUSE
	=====
	
	For the peer domain, some Active Directory entries were not structured the way
	the install script expected.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
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
	  03/30/2001  08:34p  13,783  Slaves.js  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Because the problem is in the installation script, you must copy the SFU
	distribution media to disk, apply the hotfix to the copy on disk, and then run
	Setup from the copy to which you applied the hotfix.
	
	When you run the hotfix image (Q289747_SFU_2_X86_EN.EXE) it runs a .cmd file that
	prompts for the location of the distribution media and the location to which you
	want to copy it. The .cmd file applies the patch to the copy on the disk and
	then runs Setup from the disk copy.
	
	This information is copied from the Q289747.txt file:
	
	  
	
	  ======================================================================
	  4. STEPS TO INSTALL
	  ======================================================================
	
	  * Run the file Q289747_SFU_2_X86_EN.exe from its current location.
	
	  * This will run a batch file. Supply whatever the batch file asks.
	 The batch file will
	 - Copy the "Microsoft Windows Services for UNIX 2.0" CD-ROM contents
	   to a local or network share.
	   * If the CD-ROM contents are already available either as a local
	     share or a network one, you can specify the path.
	   * If the share is on the network, ensure this is writeable.
	 - Then apply the patch on to this share.
	 - Then the batch file will start Setup from this share.
	
	  * In the setup,
	 - Select "Custom Setup".
	 - Select Server for NIS.
	 - Select other components.
	 - Proceed with the installation.
	 - Setup will prompt for a reboot. Select Yes.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
