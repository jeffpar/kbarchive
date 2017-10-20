---
layout: page
title: "Q114480: BUG: SET COMPATIBLE or Catalog Manager Changes MEMOWIDTH to 80"
permalink: /kb/114/Q114480/
---

## Q114480: BUG: SET COMPATIBLE or Catalog Manager Changes MEMOWIDTH to 80

{% raw %}

	Article: Q114480
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6,2.6a; WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp300bBUG kbvfp500aBUG kbvfp260bugkbbuglist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The value returned by SET('MEMOWIDTH') changes from 50 to 80 when FoxPro
	executes the SET COMPATIBLE DB4 or SET COMPATIBLE ON command.
	
	CAUSE
	=====
	
	The SET COMPATIBLE DB4 and SET COMPATIBLE ON commands will change the default
	value of MEMOWIDTH from 50 to 80. However, the command SET COMPATIBLE OFF does
	not restore MEMOWIDTH to its original value of 50. This problem will therefore
	occur when the SET COMPATIBLE DB4 or SET COMPATIBLE ON command is issued.
	
	This problem also occurs when a program is executed through the Catalog Manager
	and the dBASE Program check box is selected. When the Catalog Manager executes a
	program as a dBASE program, it issues a SET COMPATIBLE ON command, which causes
	the value of MEMOWIDTH to change from 50 to 80 as described above.
	
	RESOLUTION
	==========
	
	To restore MEMOWIDTH to the default value of 50, issue the following command
	after the SET COMPATIBLE DB4 or SET COMPATIBLE ON command has been executed:
	
	     SET MEMOWIDTH TO 50
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, issue this command:
	
	        ? SET('MEMOWIDTH')
	
	  Note that the value 50 is returned.
	
	2. In the Command window, issue these commands:
	
	        SET COMPATIBLE ON<BR/>
	        ? SET('MEMOWIDTH')
	
	  Note that the value 80 is returned.
	
	3. In the Command window, issue these commands:
	
	        SET COMPATIBLE OFF<BR/>
	        ? SET('MEMOWIDTH')
	
	Note that the value 80 is returned; MEMOWIDTH is not restored to 50.
	
	Additional query words: catman kbFP250 kbFP260 kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kb3rdparty kbvfp300bBUG kbvfp500aBUG kbvfp260bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MS-DOS:2.6,2.6a; WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
