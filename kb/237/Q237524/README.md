---
layout: page
title: "Q237524: Encarta Dictionary: Setup Installs an Earlier Version of MsInfo"
permalink: /kb/237/Q237524/
---

## Q237524: Encarta Dictionary: Setup Installs an Earlier Version of MsInfo

{% raw %}

	Article: Q237524
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta World English Dictionary 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Encarta World English Dictionary 2000, Setup installs
	a version of the Microsoft System Information tool that may be earlier than the
	version that is already installed on your hard disk.
	
	NOTE: If Microsoft System Information is already installed on your hard disk, it
	is not overwritten.
	
	RESOLUTION
	==========
	
	To resolve this issue, run the MsInfofx.exe file that is included with Encarta
	World English Dictionary 2000, and then remove the earlier version of the
	Microsoft System Information tool. To do this, use the following methods.
	
	Run the MsInfofx.exe File
	-------------------------
	
	1. Insert the Encarta World English Dictionary 2000 Dictionary Disc CD-ROM into
	  the CD-ROM drive.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line
	
	  "<drive>:\Support\Msinfofx\Msinfofx.exe" (without the quotation marks)
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	4. Click OK, and then click OK again.
	
	5. Click Yes, and then click OK.
	
	Remove the Earlier Version of Microsoft System Information
	----------------------------------------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line
	
	  "<drive>:\Program Files\Common Files\Microsoft Shared" (without the
	  quotation marks)
	
	  where <drive> is the drive letter of your hard disk.
	
	3. Click OK.
	
	4. Right-click the MsInfoRf folder.
	
	5. Click Delete. If you are prompted to confirm the folder deletion, click Yes.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: multi multi-media media mm ewed msinfo
	
	======================================================================
	Keywords          : kbsetup kbtool kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaReference2000
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
