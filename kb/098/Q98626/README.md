---
layout: page
title: "Q98626: SAMPLE: Annotating and Printing Text and Ink Together"
permalink: kb/098/Q98626/
---

## Q98626: SAMPLE: Annotating and Printing Text and Ink Together

	Article: Q98626
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AnnoPrnt.exe is a Windows for Pen Computing sample that demonstrates how to
	annotate a text file with ink, and then print out the resulting annotated text
	to any printer.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  AnnoPrnt.exe
	  (http://support.microsoft.com/download/support/mslfiles/AnnoPrnt.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Using the AnnoPrnt.exe sample as a starting point, developers can view one method
	to output annotated text. Certain Windows for Pen Computing application
	programming interfaces (APIs) are more suited to output to printer devices. This
	is the case here with using DrawPenData rather than RedisplayPenData.
	RedisplayPenData is more device-dependent on the video driver and not meant to
	be used in printer calls.
	
	The AnnoPrnt.exe sample also shows how to output different colors of ink so that
	developers can view the results of the color mapping on their respective
	printer; some colors are mapped such that they don't show up on a printer.
	
	Another method of printing involves printing the entire image (the annotated text
	file) as a device-independent bitmap (DIB), thus allowing the driver, not GDI,
	to do the color mapping. Drivers typically do a better mapping to grayscale, and
	therefore if color is important, using DIBs is an alternative. The WINCAP sample
	in the Software Library demonstrates outputting DIBs to printers.
	
	The AnnoPrnt.exe sample was carefully checked for possible printing problems;
	however, because so much is dependent on printer drivers, future errors are
	possible.
	
	Additional query words: softlib ANNOPRNT.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	
