---
layout: page
title: "Q256900: WD97: AV Using German Spelling Checker in Doc with Long Name"
permalink: /kb/256/Q256900/
---

## Q256900: WD97: AV Using German Spelling Checker in Doc with Long Name

{% raw %}

	Article: Q256900
	Product(s): Word 97 for Windows
	Version(s): Service Release 1 (SR-1),Service Release 2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, versions Service Release 1 (SR-1), Service Release 2 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the German version of Microsoft Word 97.
	
	SYMPTOMS
	========
	
	When you check spelling in a German document with a long name, you receive an
	error message similar to the following:
	
	  An application error has occurred and an error log is being generated.
	  WINWORD.EXE
	  Exception: Access violation(0xc000005),Address 0x30808d3a
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are true:
	
	- A significant amount of text, including several page breaks, was added to the
	  document immediately before the spelling checker was turned on.
	
	- The document is in layout view.
	
	- The document name (excluding path and extension) is at least 55 characters in
	  length.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The German version of this fix should have the following file attributes or
	later:
	
	  Date       Time   Version      Size       File name     Platform
	  ----------------------------------------------------------------
	  06/02/2000 01:07  4.71.1015.0  3,197,152  Wqfe2005.EXE  x86
	
	After the hotfix is installed, the following files will have the listed
	attributes or later:
	
	  Date      Time      Version     Size       File name      Platform
	  -------------------------------------------------------------------
	  06/01/2000 12:00AM  8.0.0.7731  5,331,728  WinWord.exe    x86
	  06/01/2000 11:27AM  8.0.0.7731  1,716,528  Wwintl32.dll   x86
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1
	--------
	
	Use a document name with fewer than 55 characters.
	
	Method 2
	--------
	
	Edit the document in normal view, or switch to normal view before you start the
	spelling checker.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In German Word 97, open a new blank document. Save it by using a name that is
	  at least 55 characters long, excluding path and file extension. For example,
	  name it "The name of this file is more than fifty-five characters in length."
	  (without the quotation marks)
	
	2. Switch to Seiten-Layout (page layout) view.
	
	3. Type "=rand(100)" (without the quotation marks) and then press ENTER. This
	  generates about six pages of text.
	
	4. Go to the beginning of the document, and type some German text with several
	  spelling errors. For example, create random text by typing rapidly.
	
	5. Press F7 to start the spelling checker.
	
	6. In the spelling checker dialog box, click Ignorieren (Ignore) several times.
	  Then click Schliessen (Close).
	
	  -or-
	
	  Click Abbrechen (Cancel) in the spelling checker dialog box.
	
	  Result: You receive the error message described in the "Symptoms" section of
	  this article.
	
	Additional query words: word97 wd97 german spelling crash AV
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR1
	Version           : :Service Release 1 (SR-1),Service Release 2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
