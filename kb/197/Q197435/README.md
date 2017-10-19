---
layout: page
title: "Q197435: WD97: New Custom.dic Is Not Created in the TOOLS-PATH Directory"
permalink: /kb/197/Q197435/
---

## Q197435: WD97: New Custom.dic Is Not Created in the TOOLS-PATH Directory

	Article: Q197435
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbproof word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Word automatically creates the Custom.dic file, the file is not created in
	the location specified by the Tools-Path setting in the Windows Registry.
	
	Instead, Word creates the file in the shared proofing tools directory, usually
	C:\Program Files\Common Files\Microsoft Shared\Proof.
	
	WORKAROUND
	==========
	
	To work around this problem, click Options on the Tools menu, select the File
	Locations tab, and note the location of the "Tools" file type. After Word
	creates your Custom.dic file, copy it to this directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
