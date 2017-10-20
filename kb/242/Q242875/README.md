---
layout: page
title: "Q242875: How to Use WinWord to Convert RTF Files to Windows DOC Files"
permalink: /kb/242/Q242875/
---

## Q242875: How to Use WinWord to Convert RTF Files to Windows DOC Files

{% raw %}

	Article: Q242875
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Site Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Office documents are not indexed.
	
	CAUSE
	=====
	
	The Microsoft Office filter used by Microsoft Site Server Search and Microsoft
	Index Server only supports indexing HTML, plain text, and Microsoft Office
	documents (.doc, .dot, .ppt, .pot, .xlb, .xls, .xlc, .obd, .opt). Rich Text
	Format (RTF) files are not supported by the Microsoft Office filter because
	there are too many different RTF formats.
	
	RESOLUTION
	==========
	
	A Microsoft Word macro can be written to automatically convert the files to the
	Word for Windows DOC format. A sample is provided below. Modify as needed.
	
	  Sub convert()
	
	   Dim strFile As String
	   Dim X As String
	   Dim Y As String
	   Dim Z As Object
	  'Collect Drive and directory to convert Word Docs in.
	   X = InputBox("Please enter the drive the documents are on.", "Drive Letter", "C")
	   Y = InputBox("Please enter the path to the directory the files are in.", "Path to files", "My Documents")
	  'seed the string to the first file in the directory
	   strFile = Dir(X & ":\" & (Y) & "\" & "*.rtf")
	  ' Start looping through files opening and saving as current version of Word.
	   On Error Resume Next
	   Do While strFile <> ""
	      Documents.Open X & ":\" & (Y) & "\" & strFile, Format:=wdOpenFormatRTF
	      ActiveDocument.SaveAs (X & ":\" & Y & "\" & strFile), FileFormat = wdFormatDocument
	      ActiveDocument.Close
	      strFile = Dir
	      
	   Loop
	  'Alert user operation is complete
	   MsgBox "done"
	
	  End Sub
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbIdxServSearch kbAudDeveloper kbIdxServ200 kbSiteServ300
	Version           : winnt:2.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
