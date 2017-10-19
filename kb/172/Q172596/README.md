---
layout: page
title: "Q172596: Clip.exe Not Compatible wth Notepad"
permalink: /kb/172/Q172596/
---

## Q172596: Clip.exe Not Compatible wth Notepad

	Article: Q172596
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement One ISBN 1-57231-559-8 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Two ISBN 1-57231-626-8 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you save text to the Clipboard using Clip.exe, and then attempt to paste the
	text into Notepad, the text will not appear.
	
	CAUSE
	=====
	
	This behavior is due to a known error in Notepad. You cannot use Clip.exe to
	paste text into Notepad. This is noted in the Rktools.hlp file that was released
	with the Microsoft Windows NT Server 4.0 Resource Kit, Supplement Two.
	
	This error is not known to occur in any other simple text editors. If you
	experience this error with another text editor, please send e-mail to
	RKINPUT@MICROSOFT.COM.
	
	STATUS
	======
	
	Microsoft Press has confirmed this to be a problem in the products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available
	
	
	Additional query words: mspress press ms_press ntreskit ntrk 1-57231-344-7 1-57231-343-9 1-57231-559-8 1-57231-626-8
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
