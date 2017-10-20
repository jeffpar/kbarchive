---
layout: page
title: "Q94297: Hardware Handshake for 3Server COM Ports"
permalink: /kb/094/Q94297/
---

## Q94297: Hardware Handshake for 3Server COM Ports

{% raw %}

	Article: Q94297
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Getting a printer to talk to a server serial port isn't always as easy as it
	seems. Communication between a serial output device such as a printer (Data
	Communications Equipment, or DCE) and a server (Data Termination Equipment, or
	DTE) is called handshaking. This handshaking is needed for the printer to tell
	the server that its buffer is full and can't accept any more data. The two most
	common types of handshaking used are XON/XOFF and hardware.
	
	MORE INFORMATION
	================
	
	XON/XOFF is software handshaking. Handshaking is accomplished by the exchange of
	control codes between the printer and the server via the transmit and receive
	lines, pins 2 and 3 respectively (RS232-C). When the printer's data buffer is
	full, it sends an XOFF telling the server's print processor to pause output.
	When the buffer has available space for more data, an XON character is sent and
	the server continues to send until the next XOFF. For example, when you type a
	long text document to your screen, the data scrolls off the screen too rapidly
	for you to read. When you press CTRL+S, you are sending an XOFF control
	character. XOFF tells the processor to pause the screen output until you've
	finished reading. Output continues when the processor receives a CTRL+Q (XON).
	The printer talks to the server in the same manner. This XON/XOFF handshaking
	continues until the server has sent the entire spool file.
	
	XON/XOFF handshaking is adequate for most serial communication needs and can
	easily be set up on the server by selecting the correct parameters on the mode
	and 3mode lines. A sample XON/XOFF mode statement is shown further below in
	example 1.
	
	Hardware handshaking uses signal voltage levels instead of control code to
	communicate between DTE and DCE devices. There are several signal options that
	can be used. The most common signals used are Data Terminal Ready (DTR) pin 20
	on the printer, which is connected to Clear To Send (CTS) pin 5 and Data Set
	Ready (DSR) pin 6 on the server. When the printer data buffer fills, the voltage
	level on pin 20, DTR, changes from high to low. This tells the server to stop
	sending data. When the buffer has available space for more data, the DTR voltage
	level toggles high and the server continues to send until the next DTR voltage
	drop.
	
	Hardware handshaking is the default setting (see example 2 below). The minimum
	parameters needed for hardware handshaking are shown in example 3. Note that DTR
	can be set to either ON or HS with the same outcome.
	
	Sample COM Port Configurations (excerpt from C:\LANMAN\NETPROG\SETMODE.CMD)
	---------------------------------------------------------------------------
	
	Example 1: XON/XOFF
	
	  c:\os2\mode
	  COM1:9600,N,8,1,TO=OFF,XON=ON,IDSR=OFF,ODSR=OFF,OCTS=OFF,DTR=OFF,RTS=OFF
	  >> startup.log 2>>&1
	  c:\os2\mode COM1: >> startup.log 2>>&1
	  c:\3mode COM1;9600;n;8;1;0; >> c:\startup.log 2>>&1
	
	Example 2: Hardware (default settings)
	
	  c:\os2\mode
	  COM1:9600,N,8,1,TO=OFF,XON=OFF,IDSR=ON,ODSR=ON,OCTS=ON,DTR=ON,RTS=ON
	  >> startup.log 2>>&1
	  c:\os2\mode COM1: >> startup.log 2>>&1
	  c:\3mode COM1;9600;n;8;1;1; >> c:\startup.log 2>>&1
	
	Example 3: Hardware (minimal settings)
	
	  c:\os2\mode
	  COM1:9600,N,8,1,TO=OFF,XON=OFF,IDSR=OFF,ODSR=ON,OCTS=OFF,DTR=ON(hs),
	  RTS=OFF >> startup.log 2>>&1
	  c:\os2\mode COM1: >> startup.log 2>>&1
	  c:\3mode COM1:9600;n;8;1;1; >> c:\startup.log 2>>&1
	
	Testing was done with the following equipment and settings:
	
	3Com 3S500 server with LAN Manager 2.1, both COM 1 and COM 3 tested E-Z Interface
	IBM XT - HP printer cable
	HP 7550a plotter:
	
	     Data flow = Remote standalone
	     Handshake = Hardware
	     Bypass = Off
	     Duplex = Full
	     Parity = 8 Bit, off
	     Baud rate = 9600
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
