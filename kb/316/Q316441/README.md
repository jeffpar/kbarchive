---
layout: page
title: "Q316441: FIX: XMLToCursor Does Not Convert XML Dates with Seconds"
permalink: kb/316/Q316441/
---

## Q316441: FIX: XMLToCursor Does Not Convert XML Dates with Seconds

	Article: Q316441
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbInternet kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283kbfaq
	Last Modified: 02-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Because the XMLToCursor function does not convert XML dates that have optional
	fractional seconds and time zones, Visual FoxPro returns an empty date value.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Paste the following code into a new program (.prg) file named "Test". Save and
	then run the program.
	
	NOTE: The computer that you use to run this code must have a connection to the
	Internet because the schema retrieves the dates from the microsoft.com Web
	site.
	
	  ** code begin
	  TEXT TO strXML
	  <?xml version="1.0" standalone="yes"?>
	  <VSData xmlns="http://www.microsoft.com">
	    <xsd:schema id="VSData" targetNamespace="http://www.microsoft.com" xmlns="http://www.microsoft.com" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata" attributeFormDefault="qualified" elementFormDefault="qualified">
	      <xsd:element name="VSData" msdata:IsDataSet="true">
	        <xsd:complexType>
	          <xsd:choice maxOccurs="unbounded">
	            <xsd:element name="alltypesxm_vfp">
	              <xsd:complexType>
	                <xsd:sequence>
	                  <xsd:element name="ikey" type="xsd:int" minOccurs="0" />
	                  <xsd:element name="dc10" type="xsd:dateTime" minOccurs="0" />
	                  <xsd:element name="tc11" type="xsd:dateTime" minOccurs="0" />
	                </xsd:sequence>
	              </xsd:complexType>
	            </xsd:element>
	          </xsd:choice>
	        </xsd:complexType>
	      </xsd:element>
	    </xsd:schema>
	    <alltypesxm_vfp>
	      <ikey>5</ikey>
	      <dc10>2002-10-05T00:00:00.0000000-07:00</dc10>
	      <tc11>2002-10-05T04:04:04.0000000-07:00</tc11>
	    </alltypesxm_vfp>
	  </VSData>
	  ENDTEXT 
	
	  XMLTOCURSOR(strXml,'cDate')
	  ? "Date field dc10 value is imported as:",cDate.dc10
	  ? "Date field dc11 value is imported as:",cDate.tc11
	  ** code end
	
	After you run the program, note that Visual FoxPro 7.0 returns an empty date
	value, which appears on the desktop.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbInternet kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbfaq
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
