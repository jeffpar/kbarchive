---
layout: page
title: "Q152087: Connpts.exe Implements Connection Points in MFC Apps"
permalink: /kb/152/Q152087/
---

## Q152087: Connpts.exe Implements Connection Points in MFC Apps

	Article: Q152087
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbConnPts kbMFC kbVC400 kbVC410 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This sample demonstrates implementing connection points and connection point
	sinks in MFC applications. The two applications that make up this sample are the
	"source" application that implements a connection point, and the "sink"
	application that implements an interface that will be hooked up to the
	connection point.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Connpts.exe now
	  (http://download.microsoft.com/download/vc40std/sample/5/WIN98/EN-US/Connpts.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Connptsvcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.8/win98mexp/en-us/Connptsvcnet.exe)
	
	Release Date: June 25, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	NOTE: Use the -d option when running CONNPTS.EXE to decompress the file and
	re-create the proper directory structure.
	
	Registration of the Connection Point Interfaces
	-----------------------------------------------
	
	To run the sample, the connection point interfaces must be registered because
	this sample demonstrates using the connection point interfaces across process
	boundaries and, in this case, the interfaces must be marshaled. You may or may
	not need to install marshaling DLLs on your system. For more information on
	resolving this issue, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q149231 CXPRX: Marshaling Code for Connection Point Interfaces
	
	Connection Points and Sinks
	---------------------------
	
	For a more detailed understanding of connection points, consult the documentation
	in the References section below.
	
	A COM object has interfaces that can be called by clients of the object. These
	are called incoming interfaces. The connection point interfaces are a means for
	this object to call back into the clients via outgoing interfaces. Typically,
	the object will want to notify any of its clients of some event or change in the
	object's state. The object in this case is known as the source, and the client
	is known as the sink.
	
	To enable communication using the connection point mechanisms, the source object
	will implement one or more connection points, such as an object that supports
	IConnectionPoint, and the sink object will implement an interface that the
	source object knows how to call. It is the job of the connection point to hold
	on to the address of the interface in the sink object so that the source can
	call it. The connection point may actually hold on to more than one address if
	multiple sinks are clients of the object. This is called multicasting. There
	will be one connection point in an object for each sink interface the object
	knows how to call.
	
	The remaining interface is IConnectionPointContainer. IConnectionPointContainer
	is implemented in the source object and serves to contain and manipulate the
	object's connection points.
	
	This sample closely models the functionality of event notifications in OLE
	Controls. The sink in this sample implements an IDispatch interface, as would a
	control container, that the source knows how to use. You will need to identify
	this interface with a unique IID so a connection point for the interface can be
	uniquely identified. You will be able to take advantage of the IDispatch
	marshaling code to marshal the dispatch interface across process boundaries.
	
	Note that the sink does not have to implement a dispatch interface. If you choose
	to implement your own interface, however, and you are going to cross process
	boundaries, you will be responsible for marshaling the interface.
	
	Running the Sample
	------------------
	
	Once the connection point interfaces are registered, the sample can be run. Run
	the "source" application first. Each of source's open documents is an event
	source. Run the "sink" application next. In sink, select Sink / Attach Source
	from the document menu. Note that each open document in sink is an event sink.
	You should see a list of available sources. If you do not, the connection point
	interfaces are not correctly registered. Select any sources that you would like
	to connect to. A sink may attach itself to any number of sources and a source
	may have any number of sinks attached. From the source document menu, select
	Events / Fire Event *. Any sinks that are hooked up to the source should display
	a message indicating that the event was received.
	
	Miscellaneous Notes
	-------------------
	
	This sample implements connection points across process boundaries. Implementing
	this functionality in in-process objects is done in the same manner. In-process
	implementation will not require that you register the connection point
	interfaces or the interface that is implemented by the sink.
	
	In this sample, the sink interface and the connection point interfaces need to be
	registered. This registration is taken care of in the InitInstance function of
	the sink application.
	
	An IID for the sink interface is made available to both the sink and source
	applications. Please note that the .cpp file in which this interface is defined
	does not use pre-compiled headers.
	
	All code in this sample relevant to the connection point implementation is
	blocked by "//SAMPLECP" and "//END SAMPLECP" blocks. This coding convention
	should make it easy to identify what you will need to implement in your code.
	
	REFERENCES
	==========
	
	"Inside OLE" by Kraig Brockschmidt, Second Edition, Chapter Four - Connectable
	Objects, published by Microsoft Press.
	
	Programming with MFC: Encyclopedia - Connectable Objects
	
	Additional query words: Connection Point kbole kbMfc kbVC400 kbVC410 kbVC500 kbDSupport kbdsi connpts connptsvcnet
	
	======================================================================
	Keywords          : kbfile kbSample kbConnPts kbMFC kbVC400 kbVC410 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
