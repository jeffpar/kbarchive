---
layout: page
title: "Q138418: WD97: Can't Use UNC Drive for Document Path on Some Networks"
permalink: /kb/138/Q138418/
---

## Q138418: WD97: Can't Use UNC Drive for Document Path on Some Networks

	Article: Q138418
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbdta word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click Open on the File menu, Word shows documents available on the
	desktop or in the root directory of drive C, even though the Document Path
	setting points to a network drive.
	
	Changing the Documents setting in the File Locations tab of the Options dialog
	box (on the Tools menu, click Options) does not change this behavior.
	
	This happens on LANtastic and NFS (UNIX) networks.
	
	
	WORKAROUND
	==========
	
	To work around this problem, map the network drive to a drive letter. Then, use
	the RegOptions macro to reset the default document location. To do this, follow
	these steps:
	
	1. Map the network drive to a drive letter.
	
	2. Use the RegOptions macro to reset the default document location:
	
	  a. On the Tools menu, click Templates And Add-ins.
	
	  b. Click Add.
	
	  c. Change to the Macros subfolder. This directory is typically C:\Program
	     Files\Microsoft Office\Office\Macros.
	
	  d. Select the Support8.dot file and click OK. This step adds the Support8
	     template to the "Global Templates and Add-ins" box. Click OK.
	
	  e. On the Tools menu, point to Macro and click Macros.
	
	  f. In the Macros In list, click "Support8.dot (global template)." In the
	     Macro Name list, click RegOptions and then click Run.
	
	  g. On the Word 8.0 Options tab, click Doc-Path in the Option list.
	
	  h. In the Setting box, type the path to the network location (for example,
	     G:\user\mydocs).
	
	  i. Click OK.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	For additional information that may help in resolving this issue, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q160807 Cannot Connect to Windows NT Server with Many Shares
	
	For additional information on networks that are supported by Office 97, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q160530 OFF97: Networks Supported by Microsoft Office 97
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: can't Artisoft Sun Select Unix PC-NFS pcnfs pc/nfs pc nfs share DEC Digital Pathworks Chameleon
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbdta word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
