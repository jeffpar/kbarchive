---
layout: page
title: "Q198049: WD97: Space Between Converted WordPerfect Back to Back Tables"
permalink: /kb/198/Q198049/
---

## Q198049: WD97: Space Between Converted WordPerfect Back to Back Tables

{% raw %}

	Article: Q198049
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you convert a WordPerfect 6.x or 7.x document containing two tables that
	are positioned one above the another with no space between them (called "back to
	back" in WordPerfect), they appear in Word with a slight space between the two
	borders of the tables.
	
	CAUSE
	=====
	
	In the conversion process, Word duplicates the WordPerfect "back to back"
	feature by inserting a hidden paragraph mark between the two tables.
	
	MORE INFORMATION
	================
	
	In WordPerfect, tables can be inserted back to back (one on top of the other)
	and still be separate tables until selected and merged together.
	
	In Word, there is no way to exactly duplicate the look of back to back tables,
	except to merge the two tables. Word always shows a small space between the
	tables.
	
	When you save the WordPerfect 6.x or 7.x file as WordPerfect 5.1 and then open it
	in Word, the hidden paragraph mark between the tables is removed, and the tables
	are merged together.
	
	Additional query words: merge double line back-to-back
	
	======================================================================
	Keywords          : winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
