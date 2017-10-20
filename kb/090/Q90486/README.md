---
layout: page
title: "Q90486: SAMPLE: Annotating a Text File with Ink"
permalink: /kb/090/Q90486/
---

## Q90486: SAMPLE: Annotating a Text File with Ink

{% raw %}

	Article: Q90486
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbsample kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An advantage for pen computers would be the ability to add handwriting to a text
	file. This process is known as annotation. An application that implements
	full-scale annotation must address several issues, including movement, saving
	ink to a file, delayed recognition, and using gestures. One of the most basic
	issues is movement.
	
	ANNOTATE demonstrates one scrolling algorithm that scrolls the ink and the text
	file appropriately.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  ANNOTATE.EX
	  (http://support.microsoft.com/download/support/mslfiles/ANNOTATE.EX)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	For an application to attach ink to a specified position of a text file, it must
	scroll and repaint the ink in the appropriate position as the text moves. The
	ANNOTATE sample application demonstrates one of many possible scrolling
	algorithms. ANNOTATE also demonstrates dynamically changing ink color and
	width.
	
	ANNOTATE calls the RedisplayPenData function to redisplay the ink and the
	DuplicatePenData function to save ink over the life of the application. ANNOTATE
	can serve as a foundation for other pen-centric annotation applications.
	
	Additional query words: softlib ANNOTATE.EXE kbfile
	
	======================================================================
	Keywords          : kbsample kb16bitonly 
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
