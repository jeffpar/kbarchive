---
layout: page
title: "Q139972: FIX: File Open Common Dialog in Win95 Returns Invalid Filename"
permalink: /kb/139/Q139972/
---

## Q139972: FIX: File Open Common Dialog in Win95 Returns Invalid Filename

{% raw %}

	Article: Q139972
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,95
	Operating System(s): 
	Keyword(s): kbVBp400bug kbOSWin95 kbOSWin98fix kbGrpDSVB
	Last Modified: 07-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling the ShowOpen method of the common dialog control to show the File Open
	common dialog box results in the following error:
	
	  Run-time error '20477'
	  Invalid filename
	
	CAUSE
	=====
	
	This error occurs the second time the ShowOpen method is called after multiple
	file names have been previously selected in the File Open dialog box. The only
	time this error occurs is when the Flags property of the common dialog box
	includes both cdlOFNAllowMultiselect (to allow multiple selections) and
	cdlOFNExplorer (to use the Windows Explorer File Open dialog box). Without the
	new shell, Microsoft Windows NT does not display the Windows Explorer Open File
	dialog box, so this problem only occurs with Microsoft Windows 95.
	
	In this case, clicking multiple files in the File Open dialog box and clicking
	Open causes the FileName property of the common dialog control to be filled with
	a NULL delimited string of filenames. When the ShowOpen method is called, an
	attempt is made to set the default file(s) to whatever the FileName property of
	the common dialog control is. The error results because the common dialog
	control does not know what to do when it encounters embedded NULLs in the
	FileName property.
	
	RESOLUTION
	==========
	
	NULLs must be used instead of spaces to delimit the list of file names because
	the Windows Explorer style Open File common dialog box with multiple selections
	enabled automatically includes support for long filenames. However, because the
	Open File dialog box does not accept a list of NULL delimited files when it is
	displayed, there is no way to have multiple files selected by default when
	displaying the Open File dialog box.
	
	Use either of the following methods to avoid the error described above:
	
	In your code, before the ShowOpen method is called again, reset the FileName
	property of the common dialog box to a single file or to no file at all.
	
	- or -
	
	Do not use the cdlOFNAllowMultiselect and cdlOFNExplorer flags at the same time.
	Search on "CommonDialog control," Topic: "Changes to CommonDialog Flags for
	Windows 95 and Windows NT," in the Visual Basic Help file for more information
	on the behavior of different combinations of these constants under different
	operating systems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of the article. This problem has been fixed in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Steps to reproduce problem (under Windows 95 only)
	--------------------------------------------------
	
	1. Start Visual Basic, or if it is already running, click New Project on the
	  File menu.
	
	2. In the toolbox, double-click CommonDialog to add a common dialog control to
	  the form.
	
	3. In the toolbox, double-click the command button to add a new command button
	  to the form.
	
	4. Add the following code to the Command1_Click procedure:
	
	        Private Sub Command1_Click()
	           CommonDialog1.Flags = cdlOFNAllowMultiselect Or cdlOFNExplorer
	           CommonDialog1.ShowOpen
	        End Sub
	
	5. On the Run menu, click Start or press the F5 key to run your application.
	
	6. Click the command button and in the resulting File Open dialog box select two
	  or more files. Click Open to hide the File Open dialog box.
	
	7. Click the command button again to attempt to show the File Open dialog box
	  again. Instead of the dialog box, a message box showing the above mentioned
	  error is displayed.
	
	REFERENCES
	==========
	
	Visual Basic for Windows Help file version 4.0; Search on "CommonDialog
	control,"; Topic: "Changes to CommonDialog Flags for Windows 95 and Windows
	NT,".
	
	Additional query words: kbCtrlz
	
	======================================================================
	Keywords          : kbVBp400bug kbOSWin95 kbOSWin98fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWin95search kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : WINDOWS:4.0,95
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
