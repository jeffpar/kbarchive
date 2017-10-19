---
layout: page
title: "Q175213: DIAL.EXE: Dial Control Sample"
permalink: /kb/175/Q175213/
---

## Q175213: DIAL.EXE: Dial Control Sample

	Article: Q175213
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Dial control is a circular slider control similar to a volume knob found on
	a stereo system. This control can be used in a situation where you want the
	functionality of a regular slider control but lack the space. If the Limit
	property is set to true, the Dial control operates as a normal slider control.
	The Value can be increased and decreased between the limits defined by Min and
	Max properties.
	
	With the Limit property set to False, the Dial can be used to make adjustments to
	large numbers. For example, use the Dial to adjust the margin of a control. Each
	revolution of the dial increases or decreases the value by (Min - Max). This
	could allow for "fine tuning" of the number, while allowing for rapid
	variations.
	
	The sample project is available from the Visual Basic Owner's site at
	http://premium.microsoft.com/download/vbasic/dial.exe. Only registered users of
	Visual Basic can access this site.
	
	MORE INFORMATION
	================
	
	The Dial control has two modes: limited and non-limited. In limited mode, the
	minimum and maximum values determine the limits possible within one revolution.
	The dial can be turned only one revolution.
	
	In the non-limited mode, the minimum and maximum values set the range of the dial
	in one revolution. However, the dial can be turned unlimited revolutions. So,
	the limited mode could be used to adjust a value between two extremes, such as 1
	and 100. The non-limited mode could be used to determine how much adjustment is
	possible in the margins of a page. Each revolution could equal one inch.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Arsenio
	Locsin, Microsoft Corporation
	
	
	Additional query words: kbdsd
	
	======================================================================
	Keywords          : kbfile kbsample kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
