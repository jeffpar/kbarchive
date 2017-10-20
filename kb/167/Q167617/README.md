---
layout: page
title: "Q167617: WD97: Table Borders Misaligned When Printed to 9-Pin Printer"
permalink: /kb/167/Q167617/
---

## Q167617: WD97: Table Borders Misaligned When Printed to 9-Pin Printer

{% raw %}

	Article: Q167617
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint word97 kbtable
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print a document containing table borders to a 9-pin dot matrix printer,
	the borders of the table may be printed much higher or lower on the page than
	they should be. The text of the table will be printed in the correct location.
	
	This problem has also been reported when printing the document to some fax
	drivers.
	
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, use the printer metrics setting for the document. If
	you enable this setting, the document will print correctly to 9-pin printers. To
	enable this setting, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the Compatibility tab.
	
	3. Under Options, click to select the "Use printer metrics to lay out document"
	  check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	The "Use printer metrics to lay out document" option uses the printer driver
	information to format the document so that it prints correctly to this
	particular printer. This is how versions of Word earlier than Word 97 lay out a
	document for printing. The disadvantage of this method is that the document
	printout varies depending on the capabilities of the current printer.
	
	In Word 97, the document is printed to a "virtual printer driver." This gives
	Word 97 the ability to print a document on multiple printers and have the
	document look the same when it is printed from any printer.
	
	This problem did not occur in earlier versions of Word because earlier versions
	of Word always use printer metrics to lay out the document.
	
	24-pin dot matrix printers print the table borders correctly in all versions of
	Word.
	
	The following 9-pin dot matrix printers are affected by this problem:
	
	  AT&T 473/478
	  Brother M-1309
	  Brother M-1809
	  Brother M-1818
	  Brother M-1909
	  Brother M-1918
	  Citizen 120D
	  Citizen 120D+
	  Citizen 180D
	  Citizen 200GX
	  Citizen 200GX/15
	  Citizen GSX-190
	  Citizen HSP-500
	  Citizen HSP-550
	  Citizen Prodot 9
	  Citizen Prodot 9x
	  Citizen Swift 9
	  Citizen Swift 9x
	  Citizen Swift 90
	  Digital LA310
	  Digital LA70
	  Digital LA75
	  Epson AP-2000
	  Epson AP-2250
	  Epson AP-2500
	  Epson DFX-5000
	  Epson DFX-8000
	  Epson Compatible 9 Pin
	  Epson EX-800
	  Epson EX-1000
	  Epson FX-80
	  Epson FX-80+
	  Epson FX-85
	  Epson FX-86e
	  Epson FX-100
	  Epson FX-100+
	  Epson FX-105
	  Epson FX-185
	  Epson FX-286
	  Epson FX-286e
	  Epson FX-800
	  Epson FX-850
	  Epson FX-870
	  Epson FX-1000
	  Epson FX-1050
	  Epson FX-1170
	  Epson JX-80
	  Epson LX-80
	  Epson LX-86
	  Epson LX-100
	  Epson LX-400
	  Epson LX-800
	  Epson LX-810
	  Epson LX-850
	  Epson LX-850+
	  Epson LX-1050
	  Epson MX-80
	  Epson MX-80 F/T
	  Epson MX-100
	  Epson RX-80
	  Epson RX-80 F/T
	  Epson RX-80 F/T+
	  Epson RX-100
	  Epson RX-100+
	  Epson T-750
	  Epson T-1000
	  Fujitsu DX 2100
	  Fujitsu DX 2200
	  Fujitsu DX 2300
	  Fujitsu DX 2400
	  IBM 4226 Model 302
	  IBM Graphics
	  Generic IBM Graphics 9pin
	  Generic IBM Graphics 9pin wide
	  IBM Personal Printer II 2380
	  IBM 2380 Plus
	  IBM Personal Printer II 2381
	  IBM 2381 Plus
	  IBM Proprinter
	  IBM Proprinter II
	  IBM Proprinter III
	  IBM Proprinter XL
	  IBM Proprinter XL II
	  IBM Proprinter XL III
	  Mannesmann Tally MT 81
	  Mannesmann Tally MT 90
	  Mannesmann Tally MT 130/9
	  Mannesmann Tally MT 131/9
	  Mannesmann Tally MT 150/9
	  Mannesmann Tally MT 151/9
	  Mannesmann Tally MT 230/18
	  Mannesmann Tally MT 230/9
	  Mannesmann Tally MT 290
	  Mannesmann Tally MT 340
	  Oki ML 182 Elite (IBM)
	  Oki ML 192 Elite (IBM)
	  Oki ML 192 Elite (Microline)
	  Oki ML 193 Elite (IBM)
	  Oki ML 193 Elite (Microline)
	  Oki ML 280 Elite (IBM)
	  Oki ML 320 Elite (IBM)
	  Oki ML 320 Elite (Microline)
	  Oki ML 321 Elite (IBM)
	  Oki ML 321 Elite (Microline)
	  Oki ML 520 Elite (IBM)
	  Oki ML 520 Elite (Microline)
	  Oki ML 521 Elite (IBM)
	  Oki ML 521 Elite (Microline)
	  Oki ML 3410 Elite (IBM)
	  Okidata ML Pacemark 3410
	  Okidata ML 92-IBM
	  Okidata ML 93-IBM
	  Okidata ML 184-IBM Turbo
	  Okidata ML 192
	  Okidata ML 192 Plus
	  Okidata ML 192-IBM
	  Okidata ML 193
	  Okidata ML 193 Plus
	  Okidata ML 193-IBM
	  Okidata ML 292
	  Okidata ML 292-IBM
	  Okidata ML 293
	  Okidata ML 293-IBM
	  Okidata ML 320
	  Okidata ML 320-IBM
	  Okidata ML 321
	  Okidata ML 321-IBM
	  Okidata ML 520
	  Okidata ML 520-IBM
	  Okidata ML 521
	  Okidata ML 521-IBM
	  Olivetti DM 95
	  Olivetti DM 109
	  Olivetti DM 119
	  Olivetti DM 209 L
	  Olivetti DM 309
	  Olivetti DM 309 S
	  Olivetti DM 309 L
	  Olivetti DM 309 SL
	  Panasonic KX-P1081
	  Panasonic KX-P1150
	  Panasonic KX-P1170
	  Panasonic KX-P1180
	  Panasonic KX-P1695
	  Panasonic KX-P2180
	  Seikosha SP-1900
	  Seikosha SP-1900+
	  Seikosha SP-2415
	  Seikosha SP-2400
	  Seikosha SP-2000
	  Star FR-15
	  Star FR-10
	  Star LC-10
	  Star LC-10 Colour
	  Star LC-15
	  Star LC-20
	  Star LC-100 Colour
	  Star LC-200
	  Star NL-10
	  Star NX-1000
	  Star NX-1000 Rainbow
	  Star NX-1001
	  Star NX-1020 Rainbow
	  Star NX-1500
	  Star XR-1000
	  Star XR-1020
	  Star XR-1500
	  Star XR-1520
	  Star ZA-200
	  Star ZA-250
	
	REFERENCES
	==========
	
	For more information about printer metrics, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q166016 WD97: Word Compatibility Options Described
	
	  Q163189 WD97: Text in Shaded Table Missing Printing to NT Servers
	
	  Q160068 WD97: Optimizing Microsoft Word 97
	
	  Q118586 WD: Footnote Moved to Next Page
	
	Additional query words: SR1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbprint word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
