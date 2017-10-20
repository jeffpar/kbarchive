---
layout: page
title: "Q110526: BUG: Edit Region with Three Lines Doesn't Have Scroll Bar"
permalink: /kb/110/Q110526/
---

## Q110526: BUG: Edit Region with Three Lines Doesn't Have Scroll Bar

{% raw %}

	Article: Q110526
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an edit region on a FoxPro for Macintosh screen, the scroll bar
	doesn't appear even though the SCROLL clause is included and the SIZE clause of
	the @ ... EDIT command makes the edit region three lines tall. (In FoxPro for
	Windows, an edit region will have a scroll bar if the edit region is three or
	more lines tall.)
	
	CAUSE
	=====
	
	This behavior is caused by differences between the Windows and Macintosh
	operating systems.
	
	RESOLUTION
	==========
	
	To work around this problem, change the SIZE clause so that it makes the @ ...
	EDIT region at least five lines tall. The scroll bar will now appear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FoxPro version 2.5b for
	Macintosh. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	The following sample program demonstrates edit regions that have and do not have
	a scroll bar even though the SCROLL clause is included on the @ ... EDIT
	command. This program uses the SALESMAN database that is in the FOXPRO:TUTORIAL
	subfolder.
	
	     USE salesman
	     DEFINE WINDOW test AT 0,0 SIZE 15.000,63.000 ;
	        TITLE "Salesman" FONT "Geneva", 13 FLOAT CLOSE
	     SCATTER MEMO MEMVAR
	     ACTIVATE WINDOW test NOSHOW
	     @ 3.125,1.750 EDIT m.notes SIZE 4.000,83.400,0.000 ;
	        FUNCTION "@2K" DEFAULT "" FONT "Geneva",9 SCROLL
	     @ 6.938,1.875 EDIT m.notes SIZE 5.000,83.000,0.000 ;
	        FUNCTION "@2K" DEFAULT "" FONT "Geneva",9 SCROLL
	     ACTIVATE WINDOW test
	     READ CYCLE
	     RELEASE WINDOW test
	
	The first EDIT region in the above program will have no scroll bar, but the
	second EDIT region will have a scroll bar. Note that the scroll bar will be
	disabled unless there are more than five lines of text in the edit region.
	
	REFERENCES
	==========
	
	"Language Reference," version 2.5, pages 46, 135-142, 159-163, 362-368, 625-
	626, 649, 678-679, 884
	
	Additional query words: VFoxMac FoxMac scrollbar buglist2.50b buglist2.60a buglist3.00b
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
