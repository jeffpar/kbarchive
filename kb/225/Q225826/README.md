---
layout: page
title: "Q225826: Incorrect Numbers in Performance Tuning Slider"
permalink: kb/225/Q225826/
---

## Q225826: Incorrect Numbers in Performance Tuning Slider

	Article: Q225826
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows 2000 with the German, Russian, or Hindi language, the
	performance tuning slider for Web sites viewed in the HTMLA Web Administration
	forms may show an incorrect number. The values for each of the three settings,
	however, are still correct. The number shown below the slider is incorrect.
	
	For example:
	
	In English, the settings are as follows:
	
	  Fewer than 10,000
	  Fewer than 100,000
	  More than 100,000
	
	In German, the correct digit grouping symbol is a period, and should read as
	follows:
	
	  Fewer than 10.000
	  Fewer than 100.000
	  More than 100.000
	
	In Russian, there is no digit grouping symbol, so there should just be a space,
	as follows:
	
	  Fewer than 10 000
	  Fewer than 100 000
	  More than 100 000
	
	In Hindi, the symbol is still a comma, but you group the first three digits, and
	then every two digits thereafter., as follows:
	
	  Fewer than 10,000
	  Fewer than 1,00,000
	  More than 1,00,000
	
	WORKAROUND
	==========
	
	The values for the positions of the performance slider bar are still the same.
	Use this article as a reference for the correct values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
