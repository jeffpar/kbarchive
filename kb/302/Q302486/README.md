---
layout: page
title: "Q302486: MechWarrior 4: Gray Box Displayed Over the Playing Screen"
permalink: /kb/302/Q302486/
---

## Q302486: MechWarrior 4: Gray Box Displayed Over the Playing Screen

{% raw %}

	Article: Q302486
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play MechWarrior 4, you may see a semi-transparent gray box that is
	displayed over the screen. The box contains the words "Move/Turn." The box may
	also contain the word "Fire."
	
	CAUSE
	=====
	
	This behavior occurs when either the font cache file is corrupted or there are
	too many fonts.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	1. Start Windows Explorer.
	
	2. On the View menu, click Folder Options.
	
	3. On the View tab, click to select the "Show all files" check box.
	
	4. Click to clear the "Hide file extensions for known file types" check box, and
	  then click OK.
	
	5. Quit Windows Explorer.
	
	6. Click Start, point to Find, and then click "Files or Folders"
	
	7. Click Start, point to Find, and then click "Files or Folders".
	
	  In Microsoft Windows Millennium Edition (Me), click Start, point to Search,
	  and then click "For Files or Folders".
	
	8. In the Named box, type "ttfcache" (without the quotation marks).
	
	9. In the "Look in" box, click My Computer, and then click Find Now.
	
	10. In the list of found files, right-click ttfCache, and then click Delete.
	
	11. When you are prompted to confirm the file deletion, click Yes.
	
	12. Close the Find or Search window.
	
	13. Restart the computer.
	
	If the issue continues to occur, you may have too many fonts. For additional
	information about fonts, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q274571
	
	Click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	MORE INFORMATION
	================
	
	The ttfCache file is a hidden file in the Windows folder that is rebuilt when
	you do one of the following:
	
	- You start Windows in Safe mode, and then restart Windows normally.
	
	- You delete the ttfCache file, and then restart Windows normally.
	
	For additional information about the ttfCache file, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q169504 TrueType Fonts Displayed Incorrectly
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
