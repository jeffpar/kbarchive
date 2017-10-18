---
layout: page
title: "Q264874: WD97: Formula Calculates to Zero When You Use Currency Symbol"
permalink: kb/264/Q264874/
---

## Q264874: WD97: Formula Calculates to Zero When You Use Currency Symbol

	Article: Q264874
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbformula word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add, subtract, or multiply currency values, the result is
	incorrectly calculated as zero. For example, if you have the following data in a
	table and the currency symbol follows the value, the result may be zero:
	
	  12.50$
	  10.00$
	  {=SUM(ABOVE)}
	
	However, the reverse is also true. If the currency symbol precedes the value
	(which is the default currency format for English (United States)), the result
	may also be calculated as zero.
	
	NOTE: When you try to use a formula to divide currency values, the result is
	returned in the form of the following error message:
	
	  !Zero Divide
	
	CAUSE
	=====
	
	This problem occurs when the currency symbol format that is specified in the
	Regional Options (Microsoft Windows 2000) or Regional Settings (Microsoft
	Windows 95 and Microsoft Windows 98) in Control Panel is different from the
	format that you are using in your document. By default, Windows uses a format in
	which the currency symbol (in most cases) precedes the value (for example,
	$1.1).
	
	Most likely, you see this behavior if you do not modify the currency symbol
	format when you change the language that you want to use. For example, you
	change the regional settings to another country, such as Germany or France
	(whose currency symbol follows the value by default), but you do not use the
	same currency symbol format in both your document and the Regional Options
	(Windows 2000) or Regional Settings (Windows 95 and Windows 98).
	
	RESOLUTION
	==========
	
	Set the currency symbol format in the Regional Options (Windows 2000) or
	Regional Settings (Windows 95 and Windows 98) in Control Panel. To do this,
	follow these steps:
	
	Windows 2000:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Options.
	
	3. Click the General tab.
	
	4. Change the "Your locale (location)" box to the appropriate country.
	
	  For example, change the "Your locale (location)" box to English (United
	  States).
	
	5. Click the Currency tab.
	
	6. In the "Currency symbol" box, type or select the currency symbol that you
	  want to use.
	
	  For example, type or select "$" (without the quotation marks).
	
	7. In the Positive Currency Format box, select the format that you want for
	  positive values. For example, do one of the following:
	
	   - If you want the currency symbol after the value (as in the example shown
	     in the "Symptoms" section of this article), select 1.1$.
	
	     -or-
	
	   - If you want the currency symbol before the value, select $1.1.
	
	8. In the Negative Currency Format box, select the format that you want for
	  negative values. For example, do one of the following:
	
	   - If you want the currency symbol after the value (as in the example shown
	     in the "Symptoms" section of this article), select (1.1$).
	
	     -or-
	
	   - If you want the currency symbol before the value, select ($1.1).
	
	9. Click Apply.
	
	10. Click OK.
	
	Windows 95 and Windows 98:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Settings.
	
	3. Change the Regional Settings to the appropriate country.
	
	  For example, change the Regional Settings to English (United States).
	
	4. Click the Currency tab.
	
	5. In the "Currency symbol" box, type or select the currency symbol that you
	  want to use.
	
	  For example, type or select "$" (without the quotation marks).
	
	6. In the "Position of currency symbol" box, select the format that you want.
	  For example, if you want to place the currency symbol before the value,
	  select "* 1.1" or "*1.1".
	
	7. In the Negative Format box, select the format that you want. For example, if
	  you want to place the currency symbol before the value, select
	  "-* 1.1" or "-*1.1".
	
	8. Click Apply.
	
	9. Click OK.
	
	
	Additional query words: deutsch mark franc foreign duetsch dutch calculation null wrong incorrect invalid zip currencies money monies
	
	======================================================================
	Keywords          : kbdta word8 kbformula word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
