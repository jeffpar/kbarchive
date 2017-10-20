---
layout: page
title: "Q318784: PRB: MSComm.Input returns comReadError (8020) with Some Ports"
permalink: /kb/318/Q318784/
---

## Q318784: PRB: MSComm.Input returns comReadError (8020) with Some Ports

{% raw %}

	Article: Q318784
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbCommPort
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Input method of the MSComm control with some serial ports, the
	MSComm.Input method may fail, and you may receive the comReadError error (error
	8020).
	
	CAUSE
	=====
	
	This problem occurs because MSComm.Input reads only the bytes that are
	immediately available in the serial driver. By design, MSComm.Input does not
	return any bytes if the serial driver has not received any bytes. Because the
	MSComm control does not expect the ReadFile method to return ERROR_IO_PENDING,
	MSComm returns the comReadError error if this occurs.
	
	RESOLUTION
	==========
	
	A serial driver should return SUCCESS synchronously for all read requests that
	can be immediately fulfilled with data that is currently present.
	
	This problem is only known to occur with some third-party serial drivers. To
	correct the problem, contact the manufacturer of the serial driver to obtain an
	updated driver.
	
	Additional query words: MSCOMM32.OCX error reading comm device
	
	======================================================================
	Keywords          : kb3rdparty kbCommPort 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
