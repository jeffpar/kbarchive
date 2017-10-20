---
layout: page
title: "Q253732: HOWTO: Use FoxPro and MSXML to Return Information About XML Doc"
permalink: /kb/253/Q253732/
---

## Q253732: HOWTO: Use FoxPro and MSXML to Return Information About XML Doc

{% raw %}

	Article: Q253732
	Product(s): Microsoft FoxPro
	Version(s): 2.5,2.6,3.0,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbXML kbGrpDSFox kbDSupport kbMSXML kbGrpDSMSXML
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft XML, versions 2.5, 2.6, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This simple example shows how to return values from an XML document using
	Microsoft Visual FoxPro.
	
	MORE INFORMATION
	================
	
	This example uses the Microsoft XML (MSXML) parser to move data from an XML
	document to a FoxPro table. The parser is available at:
	
	  http://msdn.microsoft.com/xml/default.asp
	
	The following code creates the Microsoft MSXML ActiveX object to accesses
	information contained in an XML document and displays it:
	
	1. Install the MSXML parser.
	
	2. Create the XML document by copying the sample XML code below to a text file
	  and name the file with the extension .
	
	3. Create a FoxPro program file with the following code and run the program:
	
	  PUBLIC oXML  
	
	  oXML=CREATEOBJECT('msxml.domdocument')  && This creates the parser object
	
	  oXML.LOAD(GETFILE('xml'))  && This gets and loads the XML document. 
	
	  *** Select the XML document created from the XML code below.
	
	  *** The following gives the basename / RootElemant of the XML document
	  ? oXml.DocumentElement.Basename 
	
	  *** The following gives the number of nodes (or records)           
	  ? oXML.documentelement.childnodes.LENGTH  
	
	  *** REMEMBER that the object model is in base zero.
	  *** Therefore use the following in looping expressions  
	  ? oXML.documentelement.childnodes.LENGTH - 1
	
	  *** The following returns the number of child nodes contained under the first Item
	  *** This is useful for looping through a childes elements
	  *** FOR ichild = 0 TO oXML.documentelement.childnodes.ITEM(0).childnodes.LENGTH - 1
	  ? oXML.documentelement.childnodes.ITEM(0).childnodes.LENGTH - 1
	
	  *** The following returns the nodename of the childnode  
	  ? oxml.documentelement.childnodes.item(0).childnodes(0).nodename
	
	  *** The following returns the data contained in the childnode
	  ? oXML.documentelement.childnodes.ITEM(0).childnodes(0).TEXT
	
	  *** Returns a string of all the data contained in the second child / record
	  ? oXml.documentelement.childnodes.item(1).nodetypedvalue
	
	XML Code
	--------
	
	  <orders_table>
	
	      <orders>
	  	<order_id> 10040</order_id>
	  	<cust_id>WHITC </cust_id>
	  	<emp_id>     3</emp_id>
	  	<to_name>White Clover Markets</to_name>
	  	<to_address>1029 - 12th Ave. S.</to_address>
	  	<to_city>Bellevue</to_city>
	  	<to_region>WA</to_region>
	  	<postalcode>98124</postalcode>
	  	<to_country>USA</to_country>
	  	<ship_count>USA</ship_count>
	  	<ship_via>     3</ship_via>
	  	<order_date>09/09/93</order_date>
	  	<order_amt>$1,991.00</order_amt>
	  	<order_dsc>10</order_dsc>
	  	<order_net>$1,842.88</order_net>
	  	<require_by>10/07/93</require_by>
	  	<shipped_on>09/18/93</shipped_on>
	  	<freight>$51.88</freight>
	      </orders>
	      <orders>
	  	<order_id> 10095</order_id>
	  	<cust_id>LAZYK </cust_id>
	  	<emp_id>     3</emp_id>
	  	<to_name>Lazy K Kountry Store</to_name>
	  	<to_address>12 Orchestra Terrace</to_address>
	  	<to_city>Walla Walla</to_city>
	  	<to_region>WA</to_region>
	  	<postalcode>99362</postalcode>
	  	<to_country>USA</to_country>
	  	<ship_count>USA</ship_count>
	  	<ship_via>     3</ship_via>
	  	<order_date>12/10/93</order_date>
	  	<order_amt>$530.00</order_amt>
	  	<order_dsc>10</order_dsc>
	  	<order_net>$479.58</order_net>
	  	<require_by>01/07/94</require_by>
	  	<shipped_on>12/11/93</shipped_on>
	  	<freight>$2.58</freight>
	       </orders>
	
	  </orders_table>
	
	REFERENCES
	==========
	
	For additional information on XML, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q191758 Convert FoxPro Cursor into XML Data Format
	
	  Q253713 Move Data From an XML Document into a FoxPro Table
	
	For more information about XML, see the following Web sites:
	
	  http://www.w3.org
	
	  http://www.xml.com
	
	Additional query words: kbsweptMDAC260 GRANTS Jul-19-2000
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbXML kbGrpDSFox kbDSupport kbMSXML kbGrpDSMSXML 
	Technology        : kbVFPsearch kbAudDeveloper kbMSXMLSearch kbVFP600 kbMSXML250 kbMSXML260 kbMSXML300
	Version           : :2.5,2.6,3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
