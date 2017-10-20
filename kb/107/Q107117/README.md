---
layout: page
title: "Q107117: 5250 Applet Status Line"
permalink: /kb/107/Q107117/
---

## Q107117: 5250 Applet Status Line

{% raw %}

	Article: Q107117
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbtool sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following list describes the information displayed in the status line of the
	5250 Applet.
	
	CONNECTION INDICATOR
	--------------------
	
	The session is in the indicated state: connected or disconnected. When menu items
	are highlighted, an explanation of the menu item is displayed.
	
	STATUS INDICATORS
	-----------------
	
	These indicators are only true when red.
	
	SA (System Available):
	
	The AS/400 is operating and is available to the PC.
	
	MW (Message Waiting):
	
	The AS/400 has one or more messages for you.
	
	KS (Keyboard Shift):
	
	The keyboard is in shifted mode.
	
	IM (Insert Mode):
	
	Characters inserted into an existing field will not type over the existing data.
	
	II (Input Inhibited):
	
	Keyboard input is not being accepted by the AS/400. Try pressing ERROR RESET. If
	it is still highlighted, the system is processing your request.
	
	KB (Keystroke Buffering):
	
	Keystrokes are being saved in a temporary buffer (storage space), because
	keyboard input is not being accepted by the AS/400 (as indicated by the II
	indicator). After the II indicator goes off, the keystrokes will be processed.
	To clear the keystroke buffering, press ERROR RESET.
	
	SYSTEM AND DEVICE INDICATORS
	----------------------------
	
	These indicators appear only when the applet is connected to the AS/400. The
	following are examples of system and device indicators:
	
	S1011025     The name of the AS/400 you are connected to.
	BHAMWAS1     The name of the active device.
	
	REFERENCES
	==========
	
	Microsoft SNA Server "3270/5250 Applet User's Guide," Appendix
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbtool sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400
	Version           : WINDOWS:2.0,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
