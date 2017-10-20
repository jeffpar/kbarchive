---
layout: page
title: "Q173828: Access Step by Step: Page 11: Cannot Import 01Client.txt"
permalink: /kb/173/Q173828/
---

## Q173828: Access Step by Step: Page 11: Cannot Import 01Client.txt

{% raw %}

	Article: Q173828
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Access 97 Visual Basic Step by Step ISBN 1-57231-319-6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When following the steps on pages 11 and 12 of "Microsoft Access 97 Visual Basic
	Step by Step," you may receive one or more of the following error messages:
	
	  Text file specification field separator matches decimal separator or text
	  delimiter.
	
	  An error occurred trying to import file 'C:\Access VBA
	  Practice\01Client.txt.' The file was not imported.
	
	CAUSE
	=====
	
	In many countries, Microsoft Access 97 cannot import a comma-delimited text file
	created in the United States. In these countries, commas are used as decimal
	separators in numbers. This conflicts with American comma- delimited text files.
	
	WORKAROUND
	==========
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Click Regional Settings, and on the Regional Settings tab click to select
	  English (United States) from the list.
	
	3. Click OK and restart your computer when prompted.
	
	NOTE: You should return the international setting to its previous setting when
	you have finished Lesson One of "Microsoft Access 97/Visual Basic Step by Step."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: press ms_press bookbug 1-57231-319-6
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
