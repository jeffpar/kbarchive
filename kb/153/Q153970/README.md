---
layout: page
title: "Q153970: NETWORKING FUNDAMENTALS TRAINING Corrections and Comments"
permalink: /kb/153/Q153970/
---

## Q153970: NETWORKING FUNDAMENTALS TRAINING Corrections and Comments

{% raw %}

	Article: Q153970
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Networking Essentials ISBN 1-55615-806-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	relating to the Microsoft Press book "Networking Essentials."
	
	The following topics are covered:
	
	- CD-ROM: Demo 6 issues and corrections
	
	- CD-ROM: No sound in demos
	
	- SPLINE: "Self-Placed Training" misspelled Paced
	
	- Page XXXV: Certification Roadmap not on CD-ROM
	
	- Page 75: "Insulation (PVC, Teflon)" is not correct term
	
	- Page 80: Connectors used with Thicknet cables
	
	- Page 96-103: Summary contradictions
	
	- Page 102: Optical cable incorrectly described
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the "Correction" section is worded for correcting the book and does not
	necessarily address the problem introduced by the book error. The "Comments"
	section contains specific information for working around the problem.
	
	CD-ROM: Demo 6 issues and corrections
	-------------------------------------
	
	Below are two comments from an astute reader regarding Networking Essentials Demo
	6:
	
	The demo on the CD says that, to install a new network card, you must first
	remove the power from the machine because you might get zapped, and then goes on
	to show someone putting in a network card.
	
	I have two issues with this demo:
	
	In the first case the card is fitted without any obvious indication, nor even a
	mention, of Static Precautions. I've been known to have been a little tiresome
	on this point around this place but I suspect that is only because static damage
	is such a difficult thing to prove, and if you view similar instruction videos
	from hardware vendors you will find that they are all careful to highlight and
	observe static precautions. (I have heard that in some companies, failure to
	observe static precautions is an automatic dismissal offense i.e. Medical
	Companies.)
	
	In the second case (and I could be debated on this), I believe that the
	recommendation to remove the power from the PC is actually counter- productive
	to properly grounding the computer during servicing.
	
	Almost all computer boards run on +5V DC with the occasional use of -5V &
	+,-12V DC. The main power is converted to these voltages by a SMPC (Switched
	Mode Power Supply) which is in a case of its own (the little metal box in this
	particular demo). Usually the power supply is fitted into the PC so that the
	main power lead plugs directly into the box, and in some cases the power switch
	is connected via a flying lead which is fairly well insulated if it is to meet
	design standards. Should any voltage leakage from the SMPS occur due to a fault
	condition, the whole PC case would go live as well and you would tend to notice
	that... I can assure you!
	
	I doubt too that you could find many PCs using either a Linear Power Supply or
	any other sort of Power Supply without some form of shielding of its own. Also,
	it would only be in extremely rare circumstances that you would find any other
	form of high voltage equipment inside the case of a PC, and there would probably
	be a regulatory requirement to add some sort of label to indicate that situation
	on the outside of the PC case itself.
	
	For my own purposes (and this is what I recommend), I have found it best to leave
	the power lead connected to the PC, and if you want be really safe to switch the
	power off at the wall outlet. This means that the PC is still properly grounded
	via the main lead and that I can connect a static lead from the PC to myself to
	be held at the same grounded voltage potential.
	
	Hope this is of some help.
	
	
	Correction:
	
	1. Change steps and wording to keep power supply connected (but turned off)
	  during servicing, unless the power supply or power switch is potentially
	  erratic or defective.
	
	2. Add information regarding static grounding before servicing internal
	  components that might be sensitive to static electricity (especially memory,
	  CPU, and other microchip components.
	
	Comments:
	
	Please note that not unplugging the computer case can be dangerous in certain
	situations. One particular instance is if the power supply or power switch is
	suspected to be erratic or defective in any way. In these cases, it is highly
	recommended that you remove the power cord from the computer before you open the
	case.
	
	CD-ROM: No sound in demos
	-------------------------
	
	All of the demos provide excellent text content and motion videos. However, there
	is no sound to accompany the demonstration presentations.
	
	The omission of sound was by design to ensure that all content was accessible,
	regardless of whether the computer was configured to provide audio. No sound is
	necessary to fully understand the concepts being demonstrated.
	
	Microsoft is investigating the possibility of enhancing the demonstrations to
	include sound in future editions of this product.
	
	Correction:
	
	Add the information in the description above to the README.TXT and README.WRI
	files on the CD-ROM.
	
	SPLINE:  "Self-Placed Training" misspelled Paced
	------------------------------------------------
	
	The Networking Essentials book spine reads "Self-Placed Training" instead of
	"Self-Paced Training."
	
	Page XXXV: Certification Roadmap not on CD-ROM
	----------------------------------------------
	
	The section titled "Microsoft Education and Certification Roadmap" refers to
	installing the Roadmap and the assessment exams from the \Roadmap\Disk1 and
	\Assmt folders (respectively). However, these directories do not exist on the
	Networking Essentials CD-ROM.
	
	Correction:
	
	Page XXXV: Remove the one paragraph section titled "Microsoft Education and
	Certification Roadmap."
	
	Comments:
	
	Page XXXVIII states clearly how to obtain the Roadmap and other Certified
	Professional resources and information.
	
	You can also find out more about the Roadmap and assessment exams by connecting
	to the World Wide Web address http://www.microsoft.com/ and searching for
	Roadmap.
	
	Page 75: "Insulation (PVC, Teflon)" is not correct term
	-------------------------------------------------------
	
	Page 75: Diagram pointer for inner insulator labeled "PVC or TEFLON." This
	terminology actually applies to the outer jacket. The part being pointed to is
	either soft foam, hard nylon, or a spiral type insulator.
	
	Correction:
	
	Replace "PVC or TEFLON" with "soft foam, hard nylon, or spiral type."
	
	Page 80: Connectors used with Thicknet cables
	---------------------------------------------
	
	Page 80 indicates the following: "Both thinnet and thicknet use connection
	components, known as BNC..." Actually, thinnet cables use BNC connectors and
	thicknet cables use N connectors.
	
	Correction:
	
	Reword page 80 so that it properly indicates that thinnet cables use BNC
	connectors, and thicknet cables use N connectors.
	
	Page 96-103: Summary contradictions
	-----------------------------------
	
	Page 96 states, "Because broadband transmission signal flow is unidirectional,
	there must be two paths for data to flow..." Page 103 contradicts this by
	stating, "Broadband uses analog signaling to transmit multiple simultaneous
	transmissions on the same cable."
	
	This is not a contradiction because broadband transmission contains many
	different channels, each capable of independent unidirectional transmission.
	Page 96 states that all channels can be devoted to unidirectional transmission
	or a mid-split broadband configuration can be used to reserve a portion of the
	broadband channels for receiving signals.
	
	Page 99 chart indicates IBM type 3 cable is "Voice grade cable." Page 103
	contradicts this by stating "IBM Type 3 cabling, for example, is a voice and
	data, shielded twisted-pair cable otherwise known as STP."
	
	Page 103 should state [ASCII 147]IBM Type 1 cabling...[ASCII 148].
	
	Page 102: Optical cable incorrectly described
	---------------------------------------------
	
	On page 102, Chart states optical cable is "not flexible at all." Most fiber
	optic cable is considerably more flexible than any of the copper cables,
	including UTP.
	
	Correction:
	
	Chart should state that optical cable does have some flexibility.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
