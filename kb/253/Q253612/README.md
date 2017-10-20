---
layout: page
title: "Q253612: BUG: Printers Collection May Not Contain All Printers in Folder"
permalink: /kb/253/Q253612/
---

## Q253612: BUG: Printers Collection May Not Contain All Printers in Folder

{% raw %}

	Article: Q253612
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprint kbAPI kbPrinting kbSDKWin32 kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Visual Basic 5.0, when you are listing or searching for printers in the
	Printers collection, you may find that the Printers collection does not contain
	all the printers in the printers folder.
	
	CAUSE
	=====
	
	Visual Basic 5.0 uses the GetProfileString API function to obtain the list of
	printers. One parameter of GetProfileString is a memory buffer that is allocated
	to receive the results of the function call. This buffer is then filled in with
	the list of printers by the operating system (OS). The correct procedure is to
	first determine how large a buffer is needed and then to supply a buffer of that
	size. However, Visual Basic 5.0 always allocates a buffer of 1024 bytes.
	Therefore, if all of the names of all the of the printers shown in the printers
	folder total more than 1024 characters (including a null character at the end of
	each printer name), then the Printers collection is missing some printers.
	
	RESOLUTION
	==========
	
	The workaround is to call GetProfileString in your Visual Basic code to obtain a
	separate set of printer names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The Visual Basic Printer object is initially set to the system default printer.
	Normally, in order to use a printer other than the system default, you just
	select a printer from the Printers collection. Your application then uses this
	selected printer and does not affect any other applications. However, if the
	printer you need is missing from the Printers collection, the only alternative
	is to change the system default printer so Visual Basic uses that printer.
	Please see article Q266767 listed in the "References" section for instructions
	on how to accomplish this.
	
	Note that changing the system default printer may not always be desirable because
	this will affect all applications that do not specify a printer. For this
	reason, you may want to set aside the original default printer so that you can
	restore it once your print job has finished. For example, you can use code such
	as the following:
	
	  Dim OriginalDefault As String
	  OriginalDefault = Printer.DeviceName
	
	Then use the same method as before to restore OriginalDefault as the system
	default printer.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q266767 HOWTO: Set Which Printer is the System Default Printer
	
	  Q167735 FIX: Setting Printer to Item in the Printers Collection Fails
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbAPI kbPrinting kbSDKWin32 kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
