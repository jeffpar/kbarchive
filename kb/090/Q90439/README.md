---
layout: page
title: "Q90439: Digitizing Technology for Pen-Based Systems"
permalink: /kb/090/Q90439/
---

## Q90439: Digitizing Technology for Pen-Based Systems

	Article: Q90439
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Three different digitizing technologies currently exist that meet the
	requirements for Windows for Pen Computing. These technologies are resistive,
	electrostatic, and electromagnetic. The digitizing technology must work
	effectively with an LCD screen, it must protect the LCD polarized surface, and
	it should accurately simulate the sense of pen and paper. Also, handwriting
	recognition software requires that the digitizer resolution be at least 250
	dots/inch or greater. The resistive, electrostatic, and electromagnetic
	technologies meet all of these requirements.
	
	MORE INFORMATION
	================
	
	Resistive Digitizers
	--------------------
	
	Resistive technologies basically consists of a single or a double layer of
	transparent conductive sheets spread over a protective glass surface that lies
	above the top polarizing layer of the LCD screen. The double-layered version
	relies on membrane touch-panel technology. The pen causes the two sheets to make
	contact, and the currents are measured for an x and y coordinate of the pen
	position. The single layer version requires a tethered pen to conduct current
	through the single transparent sheet.
	
	The two-layer resistive digitizing technology is relatively inexpensive and it is
	easy to implement on an LCD system. However, it has several drawbacks. The two
	conductive sheets on top of the LCD screen reduce brightness more than any of
	the other digitizing methods. Also, the two sheets, which are separated by
	spacers, are easily influenced by temperature and humidity in such a way as to
	adversely affect the uniform resistivity of the conductive sheets. As a result,
	the positional measurements for the pen are less accurate. Similar, though less
	pronounced problems, occur with the single-conductive-layer resistive digitizer
	design. A final flaw with both versions of the resistive digitizing technology
	is that it does not allow for proximity sensing of the pen.
	
	Normally, pen development standards would expect the pen to register when the pen
	is close but not touching the pen writing surface, but this feature is not
	available with resistive digitizers.
	
	Electrostatic/Capacitive Digitizers
	-----------------------------------
	
	Electrostatic or capacitive digitizers require a tethered pen, and a transparent
	conductive layer must be deposited on the underside of the protective glass
	shield. In this way, when the pen comes close to the surface of the glass, the
	electronic signal in the pen creates a capacitive effect with the conductive
	sheet on the underside of the glass. Relative current measurements determine the
	x and y coordinate position of the pen.
	
	The electrostatic/capacitive digitizer has an advantage over resistive digitizers
	because it implements proximity sensing for the pen. Not only can the
	electrostatic method provide information about pen position above the writing
	surface, but it also provides information about pen height as well as pen tilt.
	The disadvantages of the electrostatic/capacitive digitizer is that it requires
	a tethered pen, and it reduces optical transmissions to about the same degree as
	the single-layer resistive technique (that is, the transparent conductive layer
	reduces LCD transmission by about 15 percent).
	
	Electromagnetic Digitizers
	--------------------------
	
	The electromagnetic digitizer relies on a series of looped coils on a sensor
	board beneath the LCD screen. A magnetic field is created through the coils. The
	pen may either reflect these electromagnetic waves back to the sensor board by
	its own coil inside of the pen, or the pen is tethered and will send back its
	own signal. Pen position is determined by measuring the magnetic signal from the
	pen relative to the position of the sensor board coils under the LCD.
	
	The main advantage that the electromagnetic digitizer has over the other two
	technologies is that it does not interfere with the optical transmission of the
	LCD. Because the sensor board is behind the LCD screen, only a protective clear
	glass layer needs to be placed above the top of the LCD display panel. A
	disadvantage of the electromagnetic system is that it requires the "light-pipe"
	design for backlighting. This method of backlighting requires that the light
	source be placed at the side of the LCD screen rather than directly behind the
	screen. Additionally the electromagnetic digitizer requires that a magnetic
	shield be placed between the sensor board and the system motherboard. Examples
	of currently released products that use the electromagnetic digitizing technique
	are the NCR 3125 clipboard, the WACOM 648A tablet, and the WACOM 510C tablets.
	
	REFERENCES
	==========
	
	"Electronic Engineering Times," July 27, 1992, "Design: Pens Pose Design
	Challenges," pages 52, 56, Kevin J. Hathaway and Allan A. Fleischer
	
	Additional query words: pen-win stylis pencil pointer writing ink inking draw drawing touch panel 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	
