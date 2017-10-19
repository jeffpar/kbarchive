---
layout: page
title: "Q196963: WD97: Equation Editor 2.0 Runs Instead of Math Type 3.0"
permalink: /kb/196/Q196963/
---

## Q196963: WD97: Equation Editor 2.0 Runs Instead of Math Type 3.0

	Article: Q196963
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97; :2.0
	Operating System(s): 
	Keyword(s): kbole kbdta word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Equation Editor, version 2.0 
	-------------------------------------------------------------------------------
	
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you double-click the MathType icon or MathType object in a Word document,
	Equation Editor runs instead of MathType.
	
	MathType 3.0 Equation is not available to select from the Object dialog box
	(Insert menu) in Word.
	
	Math Type version 3.0 is a third-party application, by Design Science, Inc., that
	you can purchase separately for use with Word.
	
	CAUSE
	=====
	
	You are using MathType (version 3.0 through 3.0e), which may not be registered
	as the default equation editor in the Registry file. This problem typically
	occurs when you install Equation Editor during a complete/custom installation of
	Word.
	
	WORKAROUND
	==========
	
	To work around the problem, use one of the following methods.
	
	Method 1
	--------
	
	Upgrade to MathType version 3.1. For more information, contact MathType technical
	support by usisng one of the following methods:
	
	  Design Science
	  4028 E. Broadway
	  Long Beach, CA 90803
	
	  Voice: (310) 433-0685/800-827-0685
	  Fax: (310) 433-6969
	  Internet: Http://www.mathtype.com/mathtype/
	  Email: mtsupport@mathtype.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	To convert equations from Equation Editor objects into MathType equations, follow
	these steps:
	
	1. Start MathType and Word.
	
	2. In Word, open the document that contains your equations.
	
	3. Select an equation, and then click Cut on the Edit menu.
	
	4. Switch to the MathType window, and then click Paste on the Edit menu.
	
	5. Select the equation, and then click Copy on the Edit menu.
	
	6. Switch to Word and then click Paste on the Edit menu.
	
	7. Repeat steps 3 through 6 for each equation in the document.
	
	Method 2
	--------
	
	Update the registry by rerunning the MathType Setup program, and then follow
	these steps:
	
	1. Click Custom Installation.
	
	2. Select the MathType's OLE Registration option, and then click OK.
	
	NOTE: Do not install the WordBasic Macros included with MathType. They were
	designed for use with Word for Windows 2.0 and do not work correctly in Word 97
	for Windows.
	
	Method 3
	--------
	
	If you tried methods 1 and 2 and Equation Editor still runs instead of MathType,
	make the following modifications manually:
	
	1. Follow these steps to modify the Win.ini file:
	
	  a. Click the Start button and click Run. Type "Sysedit" (without the
	     quotation marks) in the Open box, and then click OK.
	
	  b. In the Win.ini file, locate the [Embedding] section.
	
	  c. Comment all lines in this section that begin with Equation. To do this,
	     type a semicolon before each line that begins with the word, "Equation."
	
	  d. Save and exit System Configuration Editor.
	
	2. Modify the Registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	  If you are running Windows NT, you should also update your Emergency Repair
	  Disk (ERD).
	
	  a. Quit all programs.
	
	  b. Click the Start button on the taskbar, and then click Run.
	
	  c. In the Open box, type "regedit" (without the quotation marks), and then
	     click OK.
	
	  d. Locate and double-click the following Registry key:
	
	         Hkey_Classes_Root\Equation.2
	
	  e. On the Registry menu, click Export Registry File, type a file name, and
	     then click Save.
	
	  f. Double-click the Default key, type "MathType Equation" (without the
	     quotation marks) in the Value Data box, and then click OK.
	
	  g. Locate and double-click the following Registry key:
	
	        Hkey_Classes_Root\Equation.2\Protocol\StdFileEditing\Server
	
	  h. Double-click the Default key, type the complete path including the
	     application name, Mathtype.exe, and then click OK.
	
	  i. Locate and double-click the following Registry key:
	
	        Hkey_Classes_Root\Equation.2\Protocol\Stdexecute\Server
	
	  j. Double-click the Default key, type the complete path including the
	     application name, Mathtype.exe, and then click OK.
	
	  k. Locate and double-click the following Registry key:
	
	         Hkey_Classes_Root\Equation.2\Shell\Open\Command
	
	  l. Double-click the Default key, type the complete path including the
	     application name, Mathtype.exe, and then click OK.
	
	  m. Close the registry.
	
	MORE INFORMATION
	================
	
	Design Science has confirmed this to be a problem with MathType 3.0. This
	problem has been corrected in MathType, version 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbEquationEdSearch kbEquationEd200
	Version           : WINDOWS:97; :2.0
	Issue type        : kbprb
	
	=============================================================================
	
