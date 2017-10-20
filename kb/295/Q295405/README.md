---
layout: page
title: "Q295405: HOWTO: Capture TCP and HTTP Data Frames Using Network Monitor"
permalink: /kb/295/Q295405/
---

## Q295405: HOWTO: Capture TCP and HTTP Data Frames Using Network Monitor

{% raw %}

	Article: Q295405
	Product(s): Internet Information Server
	Version(s): 3.0,3.0 SP1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbXML _IK kbDSupport kbMSXML kbGrpDSMSXML
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	- Microsoft XML, versions 3.0, 3.0 SP1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Network Monitor is a utility that ships with Microsoft Windows 2000 Server and
	with Microsoft Systems Management Server. With Network Monitor, you can capture
	and observe network traffic patterns and problems.
	
	MORE INFORMATION
	================
	
	When you set up a capture, you can filter frames and view data details presented
	in three panes: the Summary pane, the Detail pane, and the Hex pane. The
	following steps describe how to create a capture for the purpose of monitoring
	activity related to the XMLHTTP and ServerXMLHTTP HTTP objects in the Microsoft
	XML parser.
	
	Three computers are used in this example:
	
	- The DataServer computer contains the XML file. In this example, Network
	  Monitor is running on the DataServer computer.
	
	- The WebServer computer runs the ASP application that uses the ServerXMLHTTP
	  object to request the XML data.
	
	- The IEClient computer runs the browser that requests the ASP page.
	
	How to Run Network Monitor:
	
	To run Network Monitor, follow these steps:
	
	1. To open Network Monitor, on the Start menu, point to Programs, click
	  Administrative Tools, click Network Analysis Tools, and then click Network
	  Monitor. Note that Network Monitor is not installed on Microsoft Windows 2000
	  by default. If your start menu does not contain this option, you may need to
	  add it by using Windows 2000 Setup.
	
	2. To select the network interface on which the capture will run, on the Network
	  Monitor Capture menu, click Networks. Expand Local Computer to see the
	  available network interfaces on which you can capture data. One interface
	  exists for each network adapter in the computer, with one additional
	  interface for a dial-up connection. The dial-up connection has its Dial-up
	  connection property set to True. Select the interface that connects to the
	  network that you want to monitor and click OK.
	
	3. On the Network Monitor Capture menu, click Buffer Settings. The default
	  buffer size is 1 MB. However, one drawback of having a small buffer size is
	  that if the data that you are trying to capture is unpredictable, the buffer
	  may wrap around before you can stop the trace, causing you to lose the data
	  that you need. You can increase the buffer size to provide more time to stop
	  the trace. You might need to change the size to 10-20 MB, depending on the
	  data that is being monitored.
	
	4. In general, you should filter addresses before you capture the trace to
	  ensure a smaller trace file size. To set up a capture filter, first obtain
	  the IP address of the WebServer and IEClient. To do this, from a command
	  prompt, type "Ipconfig.exe" (without the quotation marks).
	
	NOTE: On a Microsoft Windows 95, Microsoft Windows 98, or Microsoft Windows
	Millennium Edition (Me) computer, type "Winipcfg.exe" (without the quotation
	marks) at a command prompt.
	
	NOTE: You should note the client IP address each time you start a capture,
	because this address can change.
	
	To add these addresses to the Network Monitor address database, follow these
	steps:
	
	  a. On the Capture menu, click Filter. In the Capture Filter dialog box, under
	     (Address Pairs), double-click INCLUDE *ANY <--> *ANY.
	
	  b. Click Edit Addresses and click Add. Type a friendly name for the WebServer
	     computer, and for Type select IP. Type the IP address and click OK. Repeat
	     this process for the IEClient computer.
	
	  c. Because the DataServer computer is running Network Monitor, there is
	     already an entry in the address database that uses the computer name.
	     Double-click the computer name, change the name to DataServer, and click
	     OK.
	
	  d. Click Close to return to the Address Expression dialog box.
	
	5. In the Address Expression dialog box, choose the stations and traffic
	  direction for the filter. For this example, create two criteria to filter on.
	  Criterion 1 allows traffic between the WebServer and IEClient computers to be
	  included in the capture, and criterion 2 allows traffic between the WebServer
	  and DataServer computers.
	
	To set up the filter criteria, follow these steps:
	
	  a. To set up filter criterion 1, in the left pane select IEClient, click the
	     double-headed arrow (<-->), and in the right pane select WebServer.
	
	  b. Click OK and make sure that the filter has been created under (Address
	     Pairs).
	
	  c. Double-click (Address Pairs) to add criterion 2.
	
	  d. In the left pane, select WebServer, click the double-headed arrow
	     (<-->), and in the right pane select DataServer.
	
	  e. Click OK.
	
	The filter criteria shown under Address Pairs are as follows:
	
	INCLUDE WebServer(IP) <--> DataServer(IP)
	INCLUDE IEClient (IP) <--> WebServer(IP)
	
	  f. Click OK to close the Capture Filter dialog box.
	
	How to Capture the Data:
	
	To capture the data, follow these steps:
	
	1. On the Capture menu, click Start. Note that the trace is now running, but
	  that no data has been captured yet because nothing has met the filter
	  criteria.
	
	2. On the IEClient computer, browse to the ASP page that is located on the
	  WebServer computer.
	
	3. After the Web site has loaded in the browser, switch back to Network Monitor.
	  On the Capture menu, click Stop.
	
	How to View the Data:
	
	To view the data, follow these steps:
	
	1. On the Capture menu, click Display Captured Data.
	
	2. Double-click a frame that you want to view. This causes the Detail (middle)
	  and Hex (bottom) panes for that frame to be displayed. Note that when a
	  section is selected in the Detail pane, it causes the hex data for this
	  section to be selected in the Hex pane, along with the ASCII translation.
	
	3. In the Detail pane, double-click the HTTP section of the frame to expand it.
	  The hex and ASCII HTTP data are selected in the Hex pane.
	
	4. Continue to drill down, selecting any fields under the HTTP frame that you
	  want to view.
	
	Steps to Reproduce Example Scenario:
	
	1. On the WebServer computer, paste the following code into a file and name the
	  file Xmlsxh.asp:
	
	  <%
	    Dim xmlSXH
	     Set xmlSXH = Server.CreateObject("MSXML2.ServerXMLHTTP.3.0")
	     xmlSXH.Open "GET", "http://machinename/VirtualDirectory/sample.xml", false
	     xmlSXH.send 
	     Response.Write xmlSXH.responseXML.xml	
	    Set xmlSXH = Nothing
	  %>
	
	2. On the DataServer computer, paste the following code into a file and name the
	  file Sample.xml:
	
	  <?xml version="1.0" ?>
	  <kukus>
	  	<kuku>	kuku	</kuku>
	  </kukus>
	
	3. On the IEClient computer, use Internet Explorer to call Xmlsxh.asp from the
	  WebServer computer. The URL will resemble the following:
	  "http://machinename/VirtualFolder/Xmlsxh.asp" (without the quotation marks)
	
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q252876 How to View HTTP Data Frames Using Network Monitor
	
	  Q148942 How to Capture Network Traffic with Network Monitor
	
	  Q243270 How to Install Network Monitor in Windows 2000
	
	  Q200910 How to Install Network Monitor in Windows 95/98
	
	Additional query words: netmon
	
	======================================================================
	Keywords          : kbXML _IK kbDSupport kbMSXML kbGrpDSMSXML 
	Technology        : kbiisSearch kbAudDeveloper kbMSXMLSearch kbiis500 kbMSXML300 kbMSXML300SP1 kbMSXML400
	Version           : :3.0,3.0 SP1,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
