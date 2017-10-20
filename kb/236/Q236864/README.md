---
layout: page
title: "Q236864: WD97: Word Crashes When Embedding TrueType &quot;Characters in Use&quot;"
permalink: /kb/236/Q236864/
---

## Q236864: WD97: Word Crashes When Embedding TrueType &quot;Characters in Use&quot;

{% raw %}

	Article: Q236864
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a document with embedded TrueType fonts, Word may crash. An error
	message similar to the following appears:
	
	Microsoft Windows 95
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you may receive an error message similar to the following:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 0137:304860b2.
	
	Microsoft Windows NT
	
	  Dr. Watson for Windows NT
	  An application error has occurred and an application error log is being
	  generated.
	
	  Winword.exe
	
	  Exception: access violation (0xc0000005), Address 0x304881c0.
	
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are met:
	
	- The Embed TrueType fonts option under Save options was selected.
	
	- The Embed characters in use only option under Save options was selected.
	
	  (To access the two above options, on the Tools menu, click Options and then
	  click the Save tab. Or click Save on the File menu and then click the Options
	  button.)
	
	- You are embedding a font for which there is a separate *.TTF file for bold
	  but no separate *.TTF file for bold/italic; for example, Tahoma.
	
	- There are at least 32 characters formatted in bold of this font in the
	  document.
	
	- There are also characters formatted in bold/italic of this font in the
	  document.
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
